import { StyleSheet } from "react-native";
import { colors } from "@app/utils";
import { RFValue } from "react-native-responsive-fontsize";

export const useStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    labelText: {
      fontWeight: "bold",
      fontSize: RFValue(14),
      color: colors.dark,
      marginBottom: 5,
    },
    errorContainer: {
      paddingVertical: 10,
    },
    errorText: {
      color: colors.danger,
      fontSize: RFValue(12),
      paddingHorizontal: 5,
    },
  });
