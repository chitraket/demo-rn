import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "theme";

export const styles = StyleSheet.create({
  mainCard: {
    ...metrics.margins.mV25,
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  questionTitle: {
    ...fonts.fontStyle.h5TextPB,
    color: colors.primary,
    ...metrics.margins.mB10,
  },
  title: {
    ...fonts.fontStyle.h3TextPSB,
    ...metrics.margins.mB10,
  },
});
