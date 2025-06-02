import { Header } from "@components/Header";
import { StyleSheet, View } from "react-native";
import theme from "@theme/index";
import { Highlight } from "@components/Highlight";
import { CardGroup } from "@components/CardGroup";

export function Groups() {
    
    return(
        <View style={styled.Container}>
            <Header />
            <Highlight title="Turmas" subtitle="jogue com sua turma"/>

            <CardGroup title="Ignite" />

        </View>
    )

}

const styled = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        padding: 24,
    }

});