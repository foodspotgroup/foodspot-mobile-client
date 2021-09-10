import { StyleSheet } from "react-native";
import { colors, montserrat } from "@app/utils";

export const useStyles = () =>
  StyleSheet.create({
    labelContainer: {
      flexDirection: "row",
      marginBottom: 5,
      textTransform: "capitalize",
    },
    labelText: {
      marginRight: 10,
      fontFamily: montserrat.bold,
      color: colors.dark,
    },
  });
