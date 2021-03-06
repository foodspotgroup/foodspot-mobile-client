import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { montserrat } from "@app/utils";

const styles = StyleSheet.create({
  listStyle: { elevation: 2, borderRadius: 10 },
  titleText: {
    fontSize: RFValue(18),
    fontFamily: montserrat.bold,
  },
  subtitleText: {
    fontSize: RFValue(12),
    fontFamily: montserrat.regular,
  },
});

export default styles;
