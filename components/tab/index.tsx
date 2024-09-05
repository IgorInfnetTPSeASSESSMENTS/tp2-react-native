import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

interface TabProps {
  label: string;
  active?: boolean;
  onPress: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active = false, onPress }) => {
  const { colors } = useTheme();

  const textColor = active ? colors.onPrimary : colors.onBackground;
  const backgroundColor = active ? colors.primary : colors.background;

  return (
    <TouchableOpacity
      style={[
        styles.tab,
        {
          backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.label,
          {
            color: textColor,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 16,
    borderRadius: 4,
    margin: 4,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tab;
