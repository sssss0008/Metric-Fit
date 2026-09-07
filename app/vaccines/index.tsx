import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, CheckCircle } from 'lucide-react-native';

export default function VaccinesScreen() {
  const router = useRouter();
  const vax = [
    { name: 'COVID-19 Booster', date: 'Jan 15, 2025', status: 'Completed' },
    { name: 'Tetanus Shot', date: 'May 10, 2024', status: 'Completed' },
    { name: 'Influenza Annual', date: 'Nov 02, 2026', status: 'Upcoming' },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Vaccination Records</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {vax.map((v, i) => (
          <View key={i} style={styles.card}>
            <CheckCircle color={v.status === 'Completed' ? Colors.success : Colors.warning} size={20} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.name}>{v.name}</Text>
              <Text style={styles.date}>{v.date} • {v.status}</Text>
            </View>
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
  name: { fontSize: 16, fontWeight: '700', color: Colors.text, marginBottom: 2 },
  date: { fontSize: 13, color: Colors.textSecondary },
});
