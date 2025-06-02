import theme from "@theme/index";
import { StyleSheet, Text, View } from "react-native";


type IProps = {
    title: string;
    subtitle: string;
}

export function Highlight (props: IProps) {
    return (

     <View style={styled.Container}>

        <Text style={styled.Title}>
          {props.title}
        </Text>

        <Text style={styled.Subtitle}>
          {props.subtitle}
        </Text>

     </View>

    );
}

const styled = StyleSheet.create({

   
    Container: {
     width: "100%",
     marginVertical: 32,
     marginHorizontal: 0
    },
    Title: {
      textAlign: "center",
      fontSize: theme.FONT_SIZE.XL,
      fontFamily: theme.FONT_FAMILY.BOLD,
      color: theme.COLORS.WHITE
    },
    Subtitle: {
       textAlign: "center",
       fontSize: theme.FONT_SIZE.MD,
       fontFamily: theme.FONT_FAMILY.REGULAR,
       color: theme.COLORS.GRAY_300
    }

});