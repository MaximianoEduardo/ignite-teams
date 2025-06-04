import theme from "@theme/index";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


export type IFilterStyleProps = {
    isActive?: boolean;
    title: string;
    onPressFn?: () => void
}

export function Filter({title, isActive = false, onPressFn}: IFilterStyleProps){


    return (
        <TouchableOpacity onPress={onPressFn} style={[
            {
                ...(isActive && {
                    borderStyle: "solid",
                    borderColor: theme.COLORS.GREEN_700,
                    borderWidth: 1,
                })
            },
            styled.container
        ]}>

            <Text style={styled.title}>
                {title}
            </Text>

        </TouchableOpacity>
    );
}

const styled = StyleSheet.create({
    container: {
        borderRadius: 4,
        marginRight: 12,
        height: 38,
        width: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.WHITE,
        textTransform: "capitalize"
    }
})