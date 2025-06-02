import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import logoImg from "@assets/logo.png";
import { CaretLeft } from "phosphor-react-native";
import theme from "@theme/index";

type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props){
    return (
        <View style={styled.Container}>
            
            {
            showBackButton && <TouchableOpacity style={styled.BackButton}>
              <CaretLeft color={theme.COLORS.WHITE} size={36} />
            </TouchableOpacity>
            }
            
            <Image style={styled.Logo} source={logoImg} />
        </View>
    )
}

const styled = StyleSheet.create({

    Logo: {
        width: 46,
        height: 55,
    },
    Container: {
     width: "100%",
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "center"
    },
    BackButton: {
        flex: 1
    }

});