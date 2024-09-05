import React from 'react';
import { IconButton as PaperIconButton } from 'react-native-paper';

interface IconButtonProps {
  icon: string;
  size?: number;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, size = 24, onPress }) => (
  <PaperIconButton
    icon={icon}
    size={size}
    onPress={onPress}
  />
);

export default IconButton;
