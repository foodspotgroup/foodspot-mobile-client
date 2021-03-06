import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "@app/components/ui/Icon";
import { colors } from "@app/utils";

interface IconButtonProps {
  id?: string;
  onPress?: () => void;
  icon: string;
  color?: "primary" | "secondary" | "default";
  size?: "sm" | "md" | "lg" | "xl" | number;
}

const sizeMap = {
  sm: 12,
  md: 24,
  lg: 36,
  xl: 50,
};

const colorMap = {
  primary: colors.teal,
  secondary: colors.secondary,
  default: colors.dark,
};

const IconButton: React.FC<IconButtonProps> = ({
  id,
  onPress,
  icon,
  color = "default",
  size = "md",
}): JSX.Element => {
  const iconSize = useMemo(() => {
    if (typeof size === "number") {
      return size;
    } else {
      return sizeMap[size];
    }
  }, [size]);

  return (
    <Icon
      id={`${id}-icon`}
      Component={TouchableOpacity}
      onPress={onPress}
      name={icon}
      color={colorMap[color]}
      raised
      reverse
      size={iconSize}
    />
  );
};

export default IconButton;
