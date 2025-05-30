import { Header } from "@components/Header";
import { StyleSheet, View } from "react-native";
import theme from "@theme/index";

export function Groups() {
    
    return(
        <View style={styled.Container}>
            <Header />
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