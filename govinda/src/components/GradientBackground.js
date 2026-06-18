import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';

export default function GradientBackground({ children, style, variant = 'default' }) {
  const gradients = {
    default: [colors.bg, '#120F2A', '#0D0B1A'],
    gold: [colors.bg, '#1A1408', colors.bg],
    krishna: ['#0A0A2E', '#0D0B1A', colors.bg],
  };

  return (
    <LinearGradient colors={gradients[variant]} style={[styles.container, style]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
