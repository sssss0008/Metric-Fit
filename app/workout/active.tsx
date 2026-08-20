import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { useWorkout } from '../../src/hooks/useWorkout';
import { RestTimer } from '../../src/components/RestTimer';
import { Check, Plus, X } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export default function ActiveWorkoutScreen() {
  const router = useRouter();
  const { activeWorkout, addExercise, addSet, updateSet } = useWorkout();

  const handleFinish = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Live Workout',
          headerRight: () => (
            <TouchableOpacity onPress={handleFinish}>
              <Text style={styles.finishBtn}>Finish</Text>
            </TouchableOpacity>
          )
        }}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeWorkout.map((ex) => (
          <View key={ex.id} style={styles.exerciseCard}>
            <Text style={styles.exerciseName}>{ex.name}</Text>

            <View style={styles.setHeader}>
              <Text style={[styles.setHeaderText, { flex: 1 }]}>SET</Text>
              <Text style={[styles.setHeaderText, { flex: 2 }]}>KG</Text>
              <Text style={[styles.setHeaderText, { flex: 2 }]}>REPS</Text>
              <View style={{ width: 40 }} />
            </View>

            {ex.sets.map((set, index) => (
              <View key={set.id} style={styles.setRow}>
                <Text style={[styles.setNumber, { flex: 1 }]}>{index + 1}</Text>
                <TextInput
                  style={[styles.input, { flex: 2 }]}
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor={Colors.textSecondary}
                  value={set.weight.toString()}
                  onChangeText={(v) => updateSet(ex.id, set.id, { weight: parseFloat(v) || 0 })}
                />
                <TextInput
                  style={[styles.input, { flex: 2 }]}
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor={Colors.textSecondary}
                  value={set.reps.toString()}
                  onChangeText={(v) => updateSet(ex.id, set.id, { reps: parseInt(v) || 0 })}
                />
                <TouchableOpacity
                  onPress={() => {
                    updateSet(ex.id, set.id, { completed: !set.completed });
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  }}
                  style={[styles.checkBtn, set.completed && styles.checkBtnActive]}
                >
                  <Check color={set.completed ? Colors.background : Colors.textSecondary} size={18} />
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity
              onPress={() => addSet(ex.id)}
              style={styles.addSetBtn}
            >
              <Plus color={Colors.text} size={16} />
              <Text style={styles.addSetText}>Add Set</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => addExercise('New Exercise')}
          style={styles.addExerciseBtn}
        >
          <Text style={styles.addExerciseText}>+ Add Exercise</Text>
        </TouchableOpacity>
      </ScrollView>

      <RestTimer initialSeconds={60} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 120,
  },
  finishBtn: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 16,
  },
  exerciseCard: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  exerciseName: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  setHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  setHeaderText: {
    color: Colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  setNumber: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    backgroundColor: Colors.surface,
    color: Colors.text,
    padding: 8,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  checkBtn: {
    width: 40,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBtnActive: {
    backgroundColor: Colors.success,
  },
  addSetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    marginTop: 8,
    gap: 4,
  },
  addSetText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  addExerciseBtn: {
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  addExerciseText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
