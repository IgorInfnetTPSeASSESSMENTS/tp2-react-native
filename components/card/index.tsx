import React from 'react';
import { Card as PaperCard, Text, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

interface CardProps {
  title: string;
  content: string;
  subtitle?: string;
  style?: object;
}

const Card: React.FC<CardProps> = ({ title, content, subtitle, style }) => (
  <PaperCard style={[styles.card, style]}>
    <PaperCard.Title title={title} subtitle={subtitle} />
    <PaperCard.Content>
      <Paragraph>{content}</Paragraph>
    </PaperCard.Content>
  </PaperCard>
);

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
  },
});

export default Card;
