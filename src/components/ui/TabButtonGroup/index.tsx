import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import styles from "./styles";
import { colors } from "@app/utils";

interface TabButtonGroupProps {
  id?: string;
  onPress: (index: number) => void;
  selectedIndex: number;
  buttons: string[];
}

const TabButtonGroup: React.FC<TabButtonGroupProps> = ({
  id,
  onPress,
  selectedIndex,
  buttons,
}) => {
  return (
    <View data-testid={id} style={styles.container}>
      {buttons.map((button, index) => {
        const selected = selectedIndex === index;
        return (
          <Button
            key={`${index}-${button}`}
            data-testid={`${index}-${button}-btn`}
            title={button}
            onPress={() => onPress(index)}
            type={selected ? "solid" : "outline"}
            containerStyle={{
              marginRight: RFValue(10),
              
            }}
            buttonStyle={{ backgroundColor: selected ? colors.darkBrown : colors.white, borderColor: colors.darkBrown }}
            titleStyle={{ color: selected ? colors.white : colors.darkBrown }}
          />
        );
      })}
    </View>
  );
};

export default TabButtonGroup;
