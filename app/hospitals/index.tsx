import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, MapPin, Star } from 'lucide-react-native';

export default function HospitalsScreen() {
  const router = useRouter();
  const hospitals = [
    { id: '1', name: 'St. Jude Heart Center', distance: '1.5 km', rating: 4.9, address: '142 Park Avenue, NY' },
    { id: '2', name: 'Mayo Clinic Brain Institute', distance: '3.2 km', rating: 4.8, address: '890 Broadway, NY' },
    { id: '3', name: 'Metropolitan General', distance: '4.0 km', rating: 4.7, address: '500 5th Avenue, NY' },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Hospitals & Clinics Near Me</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {hospitals.map(h => (
          <View key={h.id} style={styles.card}>
            <Text style={styles.name}>{h.name}</Text>
            <Text style={styles.addr}>{h.address}</Text>
            <View style={styles.row}>
              <View style={styles.badge}><MapPin color={Colors.primary} size={12} /><Text style={styles.badgeText}>{h.distance}</Text></View>
              <View style={styles.badge}><Star color="#F59E0B" size={12} fill="#F59E0B" /><Text style={styles.badgeText}>{h.rating}</Text></View>
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
  card: { backgroundColor: Colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: Colors.border },
  name: { fontSize: 16, fontWeight: '700', color: Colors.text, marginBottom: 4 },
  addr: { fontSize: 13, color: Colors.textSecondary, marginBottom: 10 },
  row: { flexDirection: 'row', gap: 10 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.background, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, gap: 4, borderWidth: 1, borderColor: Colors.border },
  badgeText: { fontSize: 12, fontWeight: '600', color: Colors.text },
});
