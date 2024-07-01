import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fonts, metrics } from "theme";

type TCheckBox = {
  onPress: () => void;
  select: boolean;
  title: string;
};
const CheckBox = ({ onPress, select, title }: TCheckBox) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        ...styles.mainCard,
        backgroundColor: select ? colors.primary : colors.transparent,
      }}
    >
      <Text
        style={{ ...styles.title, color: select ? colors.white : colors.black }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
const styles = StyleSheet.create({
  mainCard: {
    ...metrics.paddings.p10,
    ...fonts.fontStyle.h3TextPSB,
    ...metrics.borderWidth.bW1,
    ...metrics.border.bR10,
    ...metrics.margins.mB10,
    borderColor: colors.primary,
  },
  title: {
    ...fonts.fontStyle.tinyTextPB,
    textAlign: "center",
  },
});
