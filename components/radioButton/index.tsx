import React from 'react';
import { RadioButton as PaperRadioButton } from 'react-native-paper';

interface RadioButtonProps {
  value: string;
  status: 'checked' | 'unchecked';
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ value, status, onPress }) => (
  <PaperRadioButton
    value={value}
    status={status}
    onPress={onPress}
  />
);

export default RadioButton;
