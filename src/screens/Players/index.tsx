import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmptyGroups } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playersGetByGroupTeam } from "@storage/player/playersGetByGroupAndTeams";
import { PlayerStorageDTO } from "@storage/player/PlayerStorage.dto";
import theme from "@theme/index";
import { AppError } from "@utils/AppError";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteParams = {
    group: string;
}

export function Players () {

    const [newPlayername, setNewPLayerName] = useState("");
    const [team, setTeam] = useState<string>("Time A");
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();

    const { group } = route.params as RouteParams;
    const newPlayerNameInputRef = useRef<TextInput>(null);


    async function handleAddPlayer() {
        if(newPlayername.trim().length === 0){
            return Alert.alert("Novo Jogador(a)", "Informe o nome da pessoa para adicionar")
        }

        const newPlayer = {
            name: newPlayername,
            team
        }

        try {
            
            await playerAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur();

            setNewPLayerName("");
            fetchPlayerByTeam();

        } catch (error) {
            if(error instanceof AppError){
                Alert.alert("Nova Pessoa", error.message)
            } else {
                console.error(error);
                Alert.alert("Nova Pessoa", "Não foi possivel adicionar")
            }
        }

        
    }


    async function fetchPlayerByTeam(){
        try {
            const playersByTeam = await playersGetByGroupTeam(group, team);

            setPlayers(playersByTeam);
        } catch(error){
            console.error("Jogadores", "Não foi possivel carregar as pessoas do time selecionado.")
        }
    }


    async function handlePlayerRemove(playerName: string) {
        try {
            
            await playerRemoveByGroup(playerName, group);
            fetchPlayerByTeam();

        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {

        fetchPlayerByTeam()
    
    }, [team]);

    return (
        <SafeAreaView style={styled.container}>
            <Header showBackButton />

            <Highlight 
                title={group}
                subtitle="adicionar a galera e separe os times"
            />

            <View style={styled.form}>
                <Input
                    valueprop={newPlayername}
                    onchangefn={setNewPLayerName}
                    onpressfn={handleAddPlayer}
                    inputRef={newPlayerNameInputRef}
                    hasButton
                    iconName="add"
                    placeholderText="Nome da pessoa">
                    
                </Input>
            </View>

            
            <View style={styled.headerList}>
                <FlatList 
                
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter 
                            title={item}
                            isActive={item === team}
                            onPressFn={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <Text style={styled.numberOfPlayers}>
                    {players.length}
                </Text>
            </View>

            
            <FlatList 
                data={players}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1}
                ]}
                renderItem={({item}) => (
                    <PlayerCard onRemovefn={handlePlayerRemove(item.name)} name={item.name} />
                )}
                ListEmptyComponent={() => (
                    <ListEmptyGroups message="não há players nesse time" />
                )}
            />
        
            
            <Button
                type="SECONDARY"
                title="Remover Turma"
                onPressfn={() => {}}
            />
            
        </SafeAreaView>
    );
}

const styled = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        padding: 24
    },
    form: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        width: "100%",
        backgroundColor: theme.COLORS.GRAY_700
    },
    headerList: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 32,
        marginBottom: 0,
        marginHorizontal: 12
    },
    numberOfPlayers: {
        color: theme.COLORS.GRAY_200,
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.SM
    }

});