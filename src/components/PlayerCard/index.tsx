import theme from "@theme/index";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonIcon } from "@components/ButtonIcon";

type IProps = {
    name: string;
    onRemove?: () => void;
}

export function PlayerCard(props: IProps){

    return (
        <View style={styled.container}>
            <MaterialIcons 
                size={24}
                color={theme.COLORS.GRAY_200}
                name="person"/>

            <Text style={styled.name}>
                {props.name}
            </Text>

            <ButtonIcon onRemovefn={props.onRemove} icon="close" type="SECONDARY"/>
        </View>
    );
}

const styled = StyleSheet.create({

    container: {
        width: "100%",
        height: 56,
        backgroundColor: theme.COLORS.GRAY_500,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        borderRadius: 6,
        padding: 12,
    },
    name: {
        flex: 1,
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        color: theme.COLORS.GRAY_200
    },
    icon: {
        marginLeft: 16,
        marginRight: 4
    }

});