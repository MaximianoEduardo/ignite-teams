import { Image, StyleSheet, View } from "react-native";

import logoImg from "@assets/logo.png";

export function Header(){
    return (
        <View style={styled.Container}>
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
    }

});