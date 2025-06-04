import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import theme from "@theme/index";
import { StyleSheet, View } from "react-native";

export function Players () {
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
    }

});