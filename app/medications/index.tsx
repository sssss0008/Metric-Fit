import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Clock, CheckCircle, Plus, Pill } from 'lucide-react-native';

export default function MedicationsScreen() {
  const router = useRouter();
  const [meds, setMeds] = useState([
    { id: '1', name: 'Omega-3 Fish Oil', dosage: '1 capsule', time: '08:00 AM', taken: true },
    { id: '2', name: 'Vitamin D3 2000 IU', dosage: '1 tablet', time: '01:30 PM', taken: false },
    { id: '3', name: 'Blood Pressure Tablet', dosage: '5mg', time: '08:00 PM', taken: false },
  ]);

  const toggleTaken = (id: string) => {
    setMeds(meds.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Medication Schedule</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => alert('Add pill reminder modal')}>
          <Plus color={Colors.text} size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerSubtitle}>Never miss a dose with intelligent pill reminders and schedules.</Text>

        {meds.map((med) => (
          <View key={med.id} style={[styles.medCard, med.taken && styles.medCardTaken]}>
            <View style={[styles.iconBox, med.taken && styles.iconBoxTaken]}>
              <Pill color={med.taken ? Colors.success : Colors.primary} size={22} />
            </View>
            <View style={styles.medInfo}>
              <Text style={[styles.medName, med.taken && styles.textTaken]}>{med.name}</Text>
              <Text style={styles.medDosage}>{med.dosage} • {med.time}</Text>
            </View>
            <TouchableOpacity style={styles.checkBtn} onPress={() => toggleTaken(med.id)}>
              <CheckCircle color={med.taken ? Colors.success : Colors.border} size={24} fill={med.taken ? '#D1FAE5' : 'transparent'} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  topBarTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 10,
    gap: 12,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  medCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  medCardTaken: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBoxTaken: {
    backgroundColor: '#D1FAE5',
  },
  medInfo: {
    flex: 1,
    marginLeft: 14,
  },
  medName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 2,
  },
  textTaken: {
    textDecorationLine: 'line-through',
    color: Colors.textSecondary,
  },
  medDosage: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  checkBtn: {
    padding: 4,
  },
});
