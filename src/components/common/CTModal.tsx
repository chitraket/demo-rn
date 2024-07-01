import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Modal from "react-native-modal";
import CTVIcons from "./CTVIcons";
import { colors, metrics } from "theme";
import { CTVIconsType } from "types";
import { wp } from "utils";

type TProps = {
  isVisible: boolean;
  children: any;
  onCancelPress?: (data: any) => void;
  onBackdropPress?: () => void;
  modalViewStyle?: object;
  modalContainerStyle?: object;
  modalCloseIconStyle?: object;
  iconType?: CTVIconsType;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
};
const CTModal = ({
  isVisible,
  children,
  onCancelPress,
  onBackdropPress,
  modalViewStyle,
  modalContainerStyle,
  modalCloseIconStyle,
  iconName,
  iconSize,
  iconType,
  iconColor,
  ...other
}: TProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}
      useNativeDriver
      {...other}
    >
      <TouchableOpacity
        style={{ ...styles.modalContainer, ...modalContainerStyle }}
        activeOpacity={1}
        onPress={onBackdropPress}
      >
        <TouchableWithoutFeedback>
          <View style={{ ...styles.modalView, ...modalViewStyle }}>
            {onCancelPress && (
              <TouchableOpacity
                onPress={onCancelPress}
                activeOpacity={0.5}
                style={{ ...styles.modalCloseIcon, ...modalCloseIconStyle }}
              >
                <CTVIcons
                  iconType={iconType || "IonIcons"}
                  name={iconName || "closecircle"}
                  size={iconSize || metrics.icons.medium}
                  color={iconColor || "red"}
                />
              </TouchableOpacity>
            )}
            {children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default CTModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    ...metrics.paddings.p15,
    ...metrics.border.bR25,
    backgroundColor: colors.white,
    width: wp(90),
  },
  modalCloseIcon: {
    alignSelf: "flex-end",
  },
});
