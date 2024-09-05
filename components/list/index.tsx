import React from 'react';
import { List as PaperList } from 'react-native-paper';

interface ListProps {
  title: string;
  description?: string;
  onPress?: () => void;
}

const List: React.FC<ListProps> = ({ title, description, onPress }) => (
  <PaperList.Item
    title={title}
    description={description}
    onPress={onPress}
  />
);

export default List;
