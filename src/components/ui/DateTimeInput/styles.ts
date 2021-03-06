import { StyleSheet } from "react-native";
import { colors, montserrat } from "@app/utils";
import { RFValue } from "react-native-responsive-fontsize";

interface StyleProps {
  date?: Date;
}

export const useStyles = ({ date }: StyleProps) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 10,
    },
    inputContainer: {
      flexDirection: "row",
      borderColor: colors.darkAccent,
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: "center",
    },
    input: {
      marginLeft: 10,
    },
    inputText: {
      fontFamily: montserrat.regular,
      fontSize: RFValue(18),
      opacity: date ? 1 : 0.4,
    },
    errorContainer: {
      paddingVertical: 10,
    },
    errorText: {
      color: colors.danger,
    },
  });
};
