import theme from "@theme/index";
import { UsersThree } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


type IProps = {
    title: string;
}

export function CardGroup(props : IProps) {
    return (
        <TouchableOpacity style={styled.container}>
            <UsersThree weight="fill"
              size={32} 
              style={{marginRight: 20}} 
              color={theme.COLORS.GREEN_700} />

            <Text style={styled.title}>
                {props.title}
            </Text>

        </TouchableOpacity>
    );
}

const styled = StyleSheet.create({

  container: {
    width: "100%",
    height: 90,
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    marginBottom: 12
  },
  title: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_200,
    fontFamily: theme.FONT_FAMILY.REGULAR
  },

});