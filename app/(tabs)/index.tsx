import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { useStore } from '../../src/store/useStore';
import { Flame, Plus, ClipboardList as TemplateIcon } from 'lucide-react-native';

export default function LoggerScreen() {
  const router = useRouter();
  const streak = useStore((state) => state.streak);

  const startEmptyWorkout = () => {
    router.push('/workout/active');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MetricFit</Text>
        <View style={styles.streakBadge}>
          <Flame color={Colors.primary} size={18} />
          <Text style={styles.streakText}>{streak}-Day Streak</Text>
        </View>
      </View>

      <View style={styles.metricsSummary}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Body Weight</Text>
          <Text style={styles.metricValue}>78.2 kg</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>7-Day Volume</Text>
          <Text style={styles.metricValue}>14,200 kg</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>QUICK START</Text>
      <View style={styles.quickStartRow}>
        <TouchableOpacity style={styles.actionButton} onPress={startEmptyWorkout}>
          <Plus color={Colors.text} size={20} />
          <Text style={styles.actionButtonText}>Start Empty Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
          <TemplateIcon color={Colors.text} size={20} />
          <Text style={styles.actionButtonText}>Push Day Template</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>RECENT LOGS</Text>
      <View style={styles.logCard}>
        <Text style={styles.logTitle}>• Bench Press: 4 sets</Text>
        <Text style={styles.logSub}>PR: 100 kg x 5</Text>
      </View>
      <View style={styles.logCard}>
        <Text style={styles.logTitle}>• Squat: 3 sets</Text>
        <Text style={styles.logSub}>@ 120 kg</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  streakText: {
    color: Colors.text,
    marginLeft: 6,
    fontWeight: '600',
  },
  metricsSummary: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  metricCard: {
    flex: 1,
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  metricLabel: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  metricValue: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  sectionTitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 12,
  },
  quickStartRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  actionButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  secondaryButton: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  actionButtonText: {
    color: Colors.text,
    fontWeight: '700',
    fontSize: 14,
  },
  logCard: {
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  logTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  logSub: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginTop: 4,
  },
});
