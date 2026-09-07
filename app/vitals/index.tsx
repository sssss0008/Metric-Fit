import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Heart, Activity, Thermometer, Droplet, Scale } from 'lucide-react-native';

export default function VitalsScreen() {
  const router = useRouter();
  const [weight, setWeight] = useState('68');
  const [height, setHeight] = useState('170');
  const [bmi, setBmi] = useState('23.5');

  const calculateBmi = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const val = (w / (h * h)).toFixed(1);
      setBmi(val);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Health Vitals & Metrics</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Vitals Grid */}
        <View style={styles.grid}>
          <View style={styles.card}>
            <Heart color={Colors.error} size={24} />
            <Text style={styles.cardValue}>72 bpm</Text>
            <Text style={styles.cardLabel}>Heart Rate (Normal)</Text>
          </View>
          <View style={styles.card}>
            <Activity color={Colors.primary} size={24} />
            <Text style={styles.cardValue}>120/80</Text>
            <Text style={styles.cardLabel}>Blood Pressure</Text>
          </View>
          <View style={styles.card}>
            <Thermometer color={Colors.warning} size={24} />
            <Text style={styles.cardValue}>98.6 °F</Text>
            <Text style={styles.cardLabel}>Body Temperature</Text>
          </View>
          <View style={styles.card}>
            <Droplet color="#0284C7" size={24} />
            <Text style={styles.cardValue}>98%</Text>
            <Text style={styles.cardLabel}>Blood Oxygen (SpO2)</Text>
          </View>
        </View>

        {/* BMI Calculator Card */}
        <View style={styles.bmiCard}>
          <Scale color={Colors.primary} size={24} />
          <Text style={styles.bmiTitle}>BMI & Body Composition</Text>
          <Text style={styles.bmiResult}>Your BMI: <Text style={{ color: Colors.primary }}>{bmi}</Text> (Normal)</Text>

          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Weight (kg)"
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Height (cm)"
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.calcBtn} onPress={calculateBmi}>
            <Text style={styles.calcBtnText}>Calculate BMI</Text>
          </TouchableOpacity>
        </View>
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
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'flex-start',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginTop: 10,
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  bmiCard: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  bmiTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    marginTop: 10,
    marginBottom: 6,
  },
  bmiResult: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border,
    color: Colors.text,
  },
  calcBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calcBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});
