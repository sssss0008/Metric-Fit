import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { Timer, Plus, SkipForward } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

interface RestTimerProps {
  initialSeconds?: number;
  onFinished?: () => void;
}

export const RestTimer = ({ initialSeconds = 60, onFinished }: RestTimerProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      onFinished?.();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const addTime = () => {
    setSeconds((s) => s + 30);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  if (seconds === 0 && !isActive) return null;

  return (
    <View style={styles.container}>
      <View style={styles.timerInfo}>
        <Timer color={Colors.primary} size={20} />
        <Text style={styles.timerText}>
          {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')} remaining
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={addTime} style={styles.actionBtn}>
          <Plus color={Colors.text} size={18} />
          <Text style={styles.btnText}>+30s</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSeconds(0)} style={styles.actionBtn}>
          <SkipForward color={Colors.text} size={18} />
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  timerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  timerText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
  },
  btnText: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: '600',
  },
});
