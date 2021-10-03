import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, grid, montserrat } from "@app/utils";

const styles = StyleSheet.create({
  heading: {
    fontSize: RFValue(24),
    textAlign: "center",
    fontFamily: montserrat.bold,
    marginLeft: 16,
  },
  headingContainer: {
    padding: grid.outerRule,
  },
  contentContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subheadingContainer: {
    marginBottom: 16,
  },
  subheadingWithButtonContainer: {
    marginRight: 70,
  },
  subheading: {
    fontSize: RFValue(18),
    fontFamily: montserrat.bold,
  },
  subHeadingIcon: {
    marginRight: 8,
  },
  text: {
    fontSize: RFValue(18),
    fontFamily: montserrat.regular,
  },
  subtext: {
    fontFamily: montserrat.lightItalic,
  },
  todayText: {
    fontSize: RFValue(18),
    color: colors.green,
  },
  tags: {
    marginTop: 6,
  },

  floatingIconButton: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  buttonTitle: {
    fontSize: RFValue(18),
    color: "white",
  },
  codeContainer: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    borderBottomWidth: 0.5,
  },
  codeText: {
    fontSize: RFValue(18),
    fontFamily: montserrat.bold,
  },
  unregisterOverlay: {
    margin: 30,
    padding: 20
  },
  unregisterOverlayContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  unregisterOverlayText: {
    fontSize: RFValue(18),
    fontFamily: montserrat.regular,
    marginBottom: 10
  },
});

export default styles;
