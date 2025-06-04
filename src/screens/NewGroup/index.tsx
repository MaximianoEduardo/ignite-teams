import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import theme from "@theme/index";
import { UsersThree } from "phosphor-react-native";
import { StyleSheet, View } from "react-native";

export function NewGroup() {

    return(
        <View style={styled.container}>
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

                <Input />

                <Button
                    title="Criar"
                />
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
    content: {
        flex: 1,
        justifyContent: "center",
    },
    icon: {
        alignSelf: "center"
    }
})