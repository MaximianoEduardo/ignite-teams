import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmptyGroups } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import theme from "@theme/index";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export function Players () {


    const [team, setTeam] = useState<string>("Time A");
    const [players, setPlayers] = useState(["Eduardo"])

    return (
        <View style={styled.container}>
            <Header showBackButton />

            <Highlight 
                title="Nome da turma"
                subtitle="adicionar a galera e separe os times"
            />

            <View style={styled.form}>
                <Input 
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
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1}
                ]}
                renderItem={({item}) => (
                    <PlayerCard name={item} />
                )}
                ListEmptyComponent={() => (
                    <ListEmptyGroups message="não há players nesse time" />
                )}
            />
        
            
            <Button
                type="SECONDARY"
                title="Remover Turma"
            />
            
        </View>
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