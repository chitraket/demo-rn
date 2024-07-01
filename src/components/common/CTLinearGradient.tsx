import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, {
  Defs,
  Rect,
  LinearGradient as SVGLinearGradient,
  Stop,
} from "react-native-svg";
import { height, width } from "utils";

const CTLinearGradient = ({ colors, children, style }: any) => {
  if (!Array.isArray(colors) || colors.length < 2) {
    return null;
  }
  const gradientId = "gradient";
  return (
    <View style={[styles.container, style]}>
      <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
        <Defs>
          <SVGLinearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            {colors.map((color, index) => (
              <Stop
                key={index}
                offset={`${(100 * index) / (colors.length - 1)}%`}
                stopColor={color}
              />
            ))}
          </SVGLinearGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${gradientId})`}
        />
      </Svg>
      {children}
    </View>
  );
};

export default CTLinearGradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
