import React from 'react';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';

interface ProgressBarProps {
  progress: number; // Value between 0 and 1
  color?: string;
  style?: object;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color, style }) => (
  <PaperProgressBar
    progress={progress}
    color={color}
    style={style}
  />
);

export default ProgressBar;
