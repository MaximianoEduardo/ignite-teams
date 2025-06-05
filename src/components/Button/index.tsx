import theme from "@theme/index";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonTypedStyledProps = "PRIMARY" | "SECONDARY"

type IProps = {
    type?: ButtonTypedStyledProps;
    title: string;
    onPressfn: () => void;
}

export function Button ({type = "PRIMARY",title, onPressfn}: IProps){

    return(
        <TouchableOpacity 
            onPress={onPressfn}
            style={
            [{backgroundColor: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED}, 
            styled.container]}
        >
            <Text style={styled.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styled = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 6,
    },
    title: {
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.BOLD,
        color: theme.COLORS.WHITE,
    }
});