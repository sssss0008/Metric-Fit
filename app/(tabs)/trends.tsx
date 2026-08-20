import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../src/constants/Colors';

export default function TrendsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>VOLUME PROGRESSION</Text>
      <View style={styles.chartPlaceholder}>
        <Text style={styles.placeholderText}>Volume Chart Coming Soon</Text>
      </View>

      <Text style={styles.sectionTitle}>BODY WEIGHT TREND</Text>
      <View style={styles.chartPlaceholder}>
        <Text style={styles.placeholderText}>Weight Chart Coming Soon</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  sectionTitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 12,
    marginTop: 16,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  placeholderText: {
    color: Colors.textSecondary,
  },
});
