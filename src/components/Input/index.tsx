import theme from "@theme/index";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AddressBook } from "phosphor-react-native";
import { ButtonIcon } from "@components/ButtonIcon";


type IProps = {
    children?: React.JSX.Element;
    placeholderText: string;
    hasButton?: boolean;
    iconName?: keyof typeof MaterialIcons.glyphMap;
    onchangefn?: any;
}

export function Input( props: IProps) {
    return(
        <View style={styled.container}>
            <TextInput
                autoCorrect={false}
                placeholder={props.placeholderText} 
                style={styled.input}
                placeholderTextColor={theme.COLORS.GRAY_300}
                onChangeText={props.onchangefn}
            />
            {
                props.iconName && <ButtonIcon icon={props.iconName} />
            }
        </View>
        
    );
}

const styled = StyleSheet.create({

    container: {
        justifyContent: "center",
        flexDirection: "row",
    },
    input:{
        backgroundColor: theme.COLORS.GRAY_700,
        color: theme.COLORS.WHITE,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.MD,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 56,
        maxHeight: 56,
        borderRadius: 6,
        paddingLeft: 16
    }
});