import React from 'react';
import { Snackbar as PaperSnackbar } from 'react-native-paper';

interface SnackBarProps {
  visible: boolean;
  onDismiss: () => void;
  action?: {
    label: string;
    onPress: () => void;
  };
  children: React.ReactNode;
}

const SnackBar: React.FC<SnackBarProps> = ({ visible, onDismiss, action, children }) => (
  <PaperSnackbar
    visible={visible}
    onDismiss={onDismiss}
    action={action}
  >
    {children}
  </PaperSnackbar>
);

export default SnackBar;
