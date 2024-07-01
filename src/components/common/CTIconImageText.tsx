import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ResizeMode } from "react-native-fast-image";
import CTImage from "./CTImage";
import CTVIcons from "./CTVIcons";
import { colors, fonts, metrics } from "theme";
import { CTVIconsType } from "types";

type TProps = {
  onPress?: (data: any) => void;
  disabled?: boolean;
  primaryText?: string | number;
  primaryTextStyle?: object;
  secondaryText?: string | number;
  secondaryTextStyle?: object;
  tertiaryText?: string;
  tertiaryTextStyle?: object;
  lableViewStyle?: object;
  lableSource?: JSX.Element;
  labelPlacement: "left" | "top" | "right" | "bottom";
  iconColor?: string;
  iconName?: string;
  iconType?: CTVIconsType;
  iconSize?: number;
  iconTextView?: object;
  iconBackgroundStyle?: object;
  mainSource?: JSX.Element | null;
  imageSrc?: string | number | null;
  imageResizeMode?: ResizeMode;
  imageStyle?: object;
  imageWidth?: number;
  imageHeight?: number;
  buttonActiveOpacity?: number;
  iconTextStyle?: object;
  primaryLines?: number;
  secondaryLines?: number;
  tertiaryLines?: number;
  isImageNotResponsive?: boolean;
};
const CTIconImageText = ({
  onPress,
  disabled,
  lableSource,
  lableViewStyle,
  primaryText,
  primaryTextStyle,
  secondaryText,
  secondaryTextStyle,
  tertiaryText,
  tertiaryTextStyle,
  iconColor,
  iconName,
  iconSize,
  iconType,
  labelPlacement,
  iconTextView,
  iconBackgroundStyle,
  mainSource,
  imageSrc,
  imageStyle,
  imageResizeMode,
  imageWidth,
  imageHeight,
  buttonActiveOpacity,
  iconTextStyle,
  primaryLines,
  secondaryLines,
  tertiaryLines,
  isImageNotResponsive,
  ...props
}: TProps) => {
  const _renderLeftTop = () => {
    if (labelPlacement === "left" || labelPlacement === "top") {
      if (lableSource) return lableSource;
      if (primaryText || secondaryText || tertiaryText)
        return (
          <View
            style={{
              ...styles(labelPlacement).lableViewStyle,
              ...lableViewStyle,
            }}
          >
            {primaryText ? (
              <Text
                numberOfLines={primaryLines || 1}
                style={{ ...styles().primaryTextStyle, ...primaryTextStyle }}
              >
                {primaryText}
              </Text>
            ) : null}
            {secondaryText ? (
              <Text
                numberOfLines={secondaryLines || 1}
                style={{
                  ...styles().secondaryTextStyle,
                  ...secondaryTextStyle,
                }}
              >
                {secondaryText}
              </Text>
            ) : null}
            {tertiaryText ? (
              <Text
                numberOfLines={tertiaryLines || 1}
                style={{ ...styles().tertiaryTextStyle, ...tertiaryTextStyle }}
              >
                {tertiaryText}
              </Text>
            ) : null}
          </View>
        );
    }
  };
  const _renderRightBottom = () => {
    if (labelPlacement === "right" || labelPlacement === "bottom") {
      if (lableSource) return lableSource;
      if (primaryText || secondaryText || tertiaryText)
        return (
          <View
            style={{
              ...styles(labelPlacement).lableViewStyle,
              ...lableViewStyle,
            }}
          >
            {primaryText ? (
              <Text
                numberOfLines={primaryLines || 1}
                style={{ ...styles().primaryTextStyle, ...primaryTextStyle }}
              >
                {primaryText}
              </Text>
            ) : null}
            {secondaryText ? (
              <Text
                numberOfLines={secondaryLines || 1}
                style={{
                  ...styles().secondaryTextStyle,
                  ...secondaryTextStyle,
                }}
              >
                {secondaryText}
              </Text>
            ) : null}
            {tertiaryText ? (
              <Text
                numberOfLines={tertiaryLines || 1}
                style={{ ...styles().tertiaryTextStyle, ...tertiaryTextStyle }}
              >
                {tertiaryText}
              </Text>
            ) : null}
          </View>
        );
    }
  };
  const _renderMain = () => {
    if (mainSource) return mainSource;
    if (iconType && iconName)
      return (
        <View
          style={{ ...styles().iconBackgroundStyle, ...iconBackgroundStyle }}
        >
          <CTVIcons
            iconType={iconType}
            name={iconName}
            color={iconColor}
            size={iconSize}
          />
        </View>
      );
    if (imageSrc || imageSrc === null) {
      return (
        <View style={iconBackgroundStyle}>
          <CTImage
            imageSrc={imageSrc}
            imageStyle={imageStyle}
            resizeMode={imageResizeMode}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            isImageNotResponsive={isImageNotResponsive}
          />
        </View>
      );
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={buttonActiveOpacity ? buttonActiveOpacity : 1}
      onPress={onPress}
      disabled={disabled}
      style={iconTextStyle}
      {...props}
    >
      <View style={{ ...styles(labelPlacement).iconTextView, ...iconTextView }}>
        {_renderLeftTop()}
        {_renderMain()}
        {_renderRightBottom()}
      </View>
    </TouchableOpacity>
  );
};

export default memo(CTIconImageText);

const styles = (labelPlacement?: "left" | "top" | "right" | "bottom") =>
  StyleSheet.create({
    iconTextView: {
      alignItems: "center",
      flexDirection:
        labelPlacement === "top" || labelPlacement === "bottom"
          ? "column"
          : "row",
    },
    iconBackgroundStyle: {
      ...metrics.border.bR50,
    },
    lableViewStyle: {
      ...(labelPlacement === "left"
        ? metrics.paddings.pR8
        : labelPlacement === "right"
          ? metrics.paddings.pL8
          : labelPlacement === "top"
            ? metrics.paddings.pB8
            : labelPlacement === "bottom"
              ? metrics.paddings.pT8
              : metrics.paddings.p5),
    },
    primaryTextStyle: {
      ...fonts.fontStyle.smallTextPSB,
    },
    secondaryTextStyle: {
      ...fonts.fontStyle.tinyTextPSB,
      color: colors.grey800,
    },
    tertiaryTextStyle: {
      ...fonts.fontStyle.smallTextPM,
    },
  });
