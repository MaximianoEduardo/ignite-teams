import theme from "@theme/index";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export function Loading(){
    return (
        <View style={styled.Container}>
            <ActivityIndicator color={theme.COLORS.GREEN_700} />
        </View>
    )
}

const styled = StyleSheet.create({
    Container: {
     flex: 1,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "center",
     backgroundColor: theme.COLORS.GRAY_600
    }
});