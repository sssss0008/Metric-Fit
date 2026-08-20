import { useState, useCallback, useEffect } from 'react';
import { getDb } from '../db/database';
import * as Crypto from 'expo-crypto';

export interface SetLog {
  id: string;
  reps: number;
  weight: number;
  rpe: number;
  completed: boolean;
}

export interface ExerciseLog {
  id: string;
  name: string;
  sets: SetLog[];
}

export const useWorkout = () => {
  const [activeWorkout, setActiveWorkout] = useState<ExerciseLog[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);

  const startWorkout = useCallback(() => {
    setStartTime(Date.now());
    setActiveWorkout([]);
  }, []);

  const addExercise = useCallback((name: string) => {
    const newExercise: ExerciseLog = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      sets: [{ id: Math.random().toString(36).substr(2, 9), reps: 0, weight: 0, rpe: 0, completed: false }],
    };
    setActiveWorkout((prev) => [...prev, newExercise]);
  }, []);

  const addSet = useCallback((exerciseId: string) => {
    setActiveWorkout((prev) => prev.map(ex => {
      if (ex.id === exerciseId) {
        const lastSet = ex.sets[ex.sets.length - 1];
        return {
          ...ex,
          sets: [...ex.sets, {
            id: Math.random().toString(36).substr(2, 9),
            reps: lastSet?.reps || 0,
            weight: lastSet?.weight || 0,
            rpe: 0,
            completed: false
          }]
        };
      }
      return ex;
    }));
  }, []);

  const updateSet = useCallback((exerciseId: string, setId: string, updates: Partial<SetLog>) => {
    setActiveWorkout((prev) => prev.map(ex => {
      if (ex.id === exerciseId) {
        return {
          ...ex,
          sets: ex.sets.map(s => s.id === setId ? { ...s, ...updates } : s)
        };
      }
      return ex;
    }));
  }, []);

  return { activeWorkout, startTime, startWorkout, addExercise, addSet, updateSet };
};
