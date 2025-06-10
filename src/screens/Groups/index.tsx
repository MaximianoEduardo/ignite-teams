import { Header } from "@components/Header";
import { StyleSheet, View, FlatList } from "react-native";
import theme from "@theme/index";
import { Highlight } from "@components/Highlight";
import { CardGroup } from "@components/CardGroup";
import { useCallback, useEffect, useState } from "react";
import { ListEmptyGroups } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { GroupsGetAll } from "@storage/group/groupsGetAll";
import { useFocusEffect } from "@react-navigation/native";

type RootParamList = {
    groups: undefined;
    new: undefined;
    players: {
        group: string;

    }
}

type IProps = {
    navigation: NativeStackNavigationProp <RootParamList, "groups">;
}

export function Groups({ navigation }: IProps) {

    const [groups, setGroups] = useState<string[]>([]);

    function handleNewGroup(){
        navigation.navigate("new")
    }

    async function fetchGroups(){
        try {
            const data = await GroupsGetAll();

            setGroups(data);
        } catch (error) {
            console.error(error)
        }
    }

    function handleOpenGroups(group: string){
        console.log(`chamou`)
        navigation.navigate(`players`, { group });
    }


    useFocusEffect(useCallback(() => {

        fetchGroups();

    }, []));
    
    return(
        <SafeAreaView style={styled.Container}>
            <Header />
            <Highlight title="Turmas" subtitle="jogue com sua turma"/>

            
            <FlatList 
                data={groups}
                keyExtractor={item => item}
                ListEmptyComponent={() => (
                    <ListEmptyGroups message="Que tal cadastrar a primeira turma?"/>
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1}}
                renderItem={({item}) => (
                    <CardGroup onPressfn={() => handleOpenGroups(item)} title={item} />
                )}
            />

            <Button
                title="Criar nova turma"
                onPressfn={handleNewGroup}
            />

        </SafeAreaView>
    )

}

const styled = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        padding: 24,
    }

});