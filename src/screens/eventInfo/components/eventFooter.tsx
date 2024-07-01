import React from "react";
import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CTButton } from "components";
import { metrics } from "theme";
import { navigate, navigationStrings } from "utils";

const EventFooter = () => {
  const { params } = useRoute();
  const onPress = () => {
    navigate(navigationStrings.questionnaireScreen);
  };
  const renderFooter = () => {
    if (params && params?.success) {
      return (
        <View style={styles.btnCard}>
          <CTButton
            onPress={onPress}
            btnStyle={styles.btnStyle}
            btnText="My tickets"
          />
          <CTButton
            onPress={onPress}
            btnStyle={styles.btnStyle}
            btnText="Share event"
          />
        </View>
      );
    } else {
      return <CTButton onPress={onPress} btnText="Buy tickets" />;
    }
  };
  return <View style={styles.footerCard}>{renderFooter()}</View>;
};

export default EventFooter;

const styles = StyleSheet.create({
  footerCard: {
    ...metrics.margins.mB20,
    ...metrics.margins.mT10,
    ...metrics.margins.mH15,
  },
  btnStyle: {
    flex: 1,
    ...metrics.margins.mL5,
  },
  btnCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
