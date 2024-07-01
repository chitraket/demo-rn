import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, fonts, metrics } from "theme";

type TProps = {
  onPress: (data: any) => void;
  btnStyle?: object;
  isDisable?: boolean;
  loading?: boolean;
  textStyle?: object;
  btnText: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  loadingText?: string;
  loadingTextStyle?: object;
  loadingStyle?: object;
  loadingViewStyle?: object;
  textIconViewStyle?: object;
};
const CTButton = ({
  onPress,
  btnStyle,
  isDisable,
  loading = false,
  textStyle,
  btnText,
  startIcon,
  endIcon,
  loadingText,
  loadingTextStyle,
  loadingStyle,
  loadingViewStyle,
  textIconViewStyle,
}: TProps) => {
  return (
    <TouchableOpacity
      style={{ ...styles.btnStyle, ...btnStyle }}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisable}
    >
      {!loading ? (
        <View style={{ ...styles.btnIconView, ...textIconViewStyle }}>
          {startIcon}
          <Text numberOfLines={1} style={{ ...styles.textStyle, ...textStyle }}>
            {btnText && btnText}
          </Text>
          {endIcon}
        </View>
      ) : (
        <View style={{ ...styles.btnIconView, ...loadingViewStyle }}>
          <ActivityIndicator
            style={{ ...loadingStyle }}
            color={styles.textStyle.color}
            size={metrics.icons.tiny}
          />
          <Text
            style={{
              ...styles.textStyle,
              ...loadingTextStyle,
              ...metrics.paddings.pL8,
            }}
          >
            {loadingText && loadingText}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CTButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    ...metrics.border.bR20,
    ...metrics.paddings.p10,
  },
  textStyle: {
    ...fonts.fontStyle.smallTextPSB,
    color: colors.white,
  },
  btnIconView: {
    alignItems: "center",
    flexDirection: "row",
  },
});
