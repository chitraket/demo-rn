type iconType =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "Fontisto"
  | "MaterialIcons"
  | "IonIcons"
  | "MaterialCommunityIcons";

type CTSafeAreaInsets = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type CTVIconsType =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "Fontisto"
  | "MaterialIcons"
  | "IonIcons"
  | "MaterialCommunityIcons";

type CTVIconsProps = {
  name: string;
  color?: string;
  size?: number;
  iconType: CTVIconsType;
  iconStyle?: object;
};

export type { iconType, CTSafeAreaInsets, CTVIconsType, CTVIconsProps };
