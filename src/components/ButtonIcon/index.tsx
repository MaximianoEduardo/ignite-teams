import { StyleSheet, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import theme from "@theme/index";
export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type IProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps;
    onRemovefn?: () => void;
    onpressfn?: () => void;
    
}

export function ButtonIcon ({type = "PRIMARY", icon, onpressfn}: IProps){

    return (
        <TouchableOpacity 
            onPress={onpressfn}
            style={styled.container}>
            <MaterialIcons 
                name={icon}
                color={type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED}
                size={32}
            />
        </TouchableOpacity>
    );
}

const styled = StyleSheet.create({

    container: {
        width: 32,
        height: 32,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 12
    }
});