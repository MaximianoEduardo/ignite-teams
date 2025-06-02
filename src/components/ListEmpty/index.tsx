import theme from "@theme/index";
import { StyleSheet, Text, View } from "react-native";

type Iprops = {
    message: string;
}

export function ListEmptyGroups(props: Iprops) {
    
    return (
        <View style={styled.container}>
            <Text style={styled.message}>
                {props.message}
            </Text>
        </View>
    )
}

const styled = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        textAlign: "center",
        fontSize: theme.FONT_SIZE.SM,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        color: theme.COLORS.GRAY_300,

    }
});