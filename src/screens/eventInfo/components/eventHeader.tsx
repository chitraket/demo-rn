import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CTVIcons } from "components/common";
import { colors, fonts } from "theme";
import { moderateScale, verticalScale } from "utils";

const EventHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.header,
        top: verticalScale(Math.max(Number(insets?.top), 15)),
        paddingLeft: moderateScale(Math.max(Number(insets?.left), 15)),
        paddingRight: moderateScale(Math.max(Number(insets?.right), 15)),
      }}
    >
      <TouchableOpacity>
        <CTVIcons iconType="Feather" color="white" name="chevron-left" />
      </TouchableOpacity>
      <Text style={styles.title}>Event</Text>
      <TouchableOpacity>
        <CTVIcons iconType="IonIcons" color="white" name="options" />
      </TouchableOpacity>
    </View>
  );
};

export default EventHeader;

const styles = StyleSheet.create({
  header: {
    overflow: "hidden",
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  title: {
    ...fonts.fontStyle.h5TextPSB,
    color: colors.white,
  },
});
