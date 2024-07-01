import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors, metrics } from "theme";
import { CTVIconsProps } from "types";

const CTVIcons = ({
  iconType,
  name,
  size,
  color,
  iconStyle,
}: CTVIconsProps) => {
  const getIcons = (
    iconType: string,
    name: string,
    size?: number,
    color?: string,
    iconStyle?: object,
  ) => {
    switch (iconType) {
      case "AntDesign":
        return (
          <AntDesign
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );
      case "Entypo":
        return (
          <Entypo
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );
      case "EvilIcons":
        return (
          <EvilIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );
      case "Feather":
        return (
          <Feather
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );

      case "FontAwesome":
        return (
          <FontAwesome
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );

      case "Fontisto":
        return (
          <Fontisto
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );
      case "MaterialIcons":
        return (
          <MaterialIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );
      case "IonIcons":
        return (
          <IonIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
            style={iconStyle || {}}
          />
        );
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      {getIcons(iconType, name, size, color, iconStyle)}
    </React.Fragment>
  );
};

export default CTVIcons;
