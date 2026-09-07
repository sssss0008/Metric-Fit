import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Target, CheckCircle2 } from 'lucide-react-native';

export default function GoalsScreen() {
  const router = useRouter();
  const goals = [
    { goal: 'Target Weight: 65 kg', progress: '68 kg current', done: false },
    { goal: 'Daily Water Intake: 2L', progress: '1.25L done', done: false },
    { goal: 'Cardio Workout 3x/week', progress: '2/3 completed', done: false },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Health Goals Tracker</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {goals.map((g, i) => (
          <View key={i} style={styles.card}>
            <Target color={Colors.primary} size={22} />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.goal}>{g.goal}</Text>
              <Text style={styles.prog}>{g.progress}</Text>
            </View>
            <CheckCircle2 color={Colors.border} size={22} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10 },
  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  topBarTitle: { fontSize: 17, fontWeight: '700', color: Colors.text },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 10, gap: 12 },
  card: { flexDirection: 'row', backgroundColor: Colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: Colors.border, alignItems: 'center' },
  goal: { fontSize: 16, fontWeight: '700', color: Colors.text, marginBottom: 2 },
  prog: { fontSize: 13, color: Colors.textSecondary },
});
