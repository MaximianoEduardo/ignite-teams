import theme from "@theme/index";
import { StyleSheet, TextInput } from "react-native";



export function Input() {
    return(
        <TextInput 
            placeholder="Nome da turma" 
            style={styled.container}
            placeholderTextColor={theme.COLORS.GRAY_300}
        >
        </TextInput>
    );
}

const styled = StyleSheet.create({

    container: {
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        backgroundColor: theme.COLORS.GRAY_700,
        color: theme.COLORS.WHITE,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.MD,
        borderRadius: 6,
        padding: 16
    }
});