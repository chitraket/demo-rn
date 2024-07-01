import { StyleSheet } from "react-native";
import {colors, metrics} from "theme";
import { hp, wp } from "utils/index";

export const styles = StyleSheet.create({
      viewContainer: {
        ...metrics.paddings.pT0,
        ...metrics.paddings.pL0,
        ...metrics.paddings.pR0,
      },
      bottomView: {
        overflow: "hidden",
        position: "absolute",
        width: wp(100),
        height: hp(70),
        bottom: 0,
        backgroundColor: colors.white,
        ...metrics.border.bTER15,
        ...metrics.border.bTSR15,
      },
    });