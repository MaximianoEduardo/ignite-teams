import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { GroupCreate } from "@storage/group/groupCreate";
import theme from "@theme/index";
import { UsersThree } from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function NewGroup() {

    const navigation = useNavigation();


    const [group, setGroup] = useState<string>("");

    async function handleNew(){
        try {    
            await GroupCreate(group);
        } catch (error) {
            console.error(error)
        }
        
        navigation.navigate("players", { group })
    }

    return(
        <SafeAreaView style={styled.container}>
            <Header  showBackButton />
            <View style={styled.content}>

                <UsersThree 
                    size={56} 
                    color={theme.COLORS.GREEN_700}
                    style={styled.icon}
                />
                <Highlight
                    title="Nova Turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />

                <Input
                    onchangefn={setGroup}
                    placeholderText={"Nome da turma"} />

                <Button
                
                    title="Criar" 
                    onPressfn={() => handleNew() }/>
            </View>
        </SafeAreaView> 
    );
}

const styled = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        padding: 24
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 24
    },
    icon: {
        alignSelf: "center"
    }
})