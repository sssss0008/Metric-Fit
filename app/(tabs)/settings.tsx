import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../src/constants/Colors';
import { useStore } from '../../src/store/useStore';
import { Download, Upload, Calculator, Scale } from 'lucide-react-native';

export default function SettingsScreen() {
  const { settings, setUnit } = useStore();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>TOOLS</Text>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingIcon}>
          <Calculator color={Colors.primary} size={20} />
        </View>
        <Text style={styles.settingLabel}>1RM Calculator</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>PREFERENCES</Text>
      <View style={styles.settingItem}>
        <View style={styles.settingIcon}>
          <Scale color={Colors.secondary} size={20} />
        </View>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingLabel}>Units</Text>
          <View style={styles.unitToggle}>
            <TouchableOpacity
              onPress={() => setUnit('metric')}
              style={[styles.unitButton, settings.unit === 'metric' && styles.unitButtonActive]}
            >
              <Text style={styles.unitButtonText}>Metric</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setUnit('imperial')}
              style={[styles.unitButton, settings.unit === 'imperial' && styles.unitButtonActive]}
            >
              <Text style={styles.unitButtonText}>Imperial</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>DATA PORTABILITY</Text>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingIcon}>
          <Download color={Colors.success} size={20} />
        </View>
        <Text style={styles.settingLabel}>Export Data (JSON/CSV)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingIcon}>
          <Upload color={Colors.textSecondary} size={20} />
        </View>
        <Text style={styles.settingLabel}>Import Backup</Text>
      </TouchableOpacity>
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
    marginTop: 24,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  unitToggle: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 8,
    padding: 2,
  },
  unitButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  unitButtonActive: {
    backgroundColor: Colors.border,
  },
  unitButtonText: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: '600',
  },
});
