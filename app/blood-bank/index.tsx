import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Droplet, MapPin, Phone } from 'lucide-react-native';

export default function BloodBankScreen() {
  const router = useRouter();
  const donors = [
    { id: '1', name: 'John Doe', bloodType: 'O+', distance: '1.2 km away', phone: '+1 555-0142' },
    { id: '2', name: 'Samantha Smith', bloodType: 'A-', distance: '2.5 km away', phone: '+1 555-0189' },
    { id: '3', name: 'David Miller', bloodType: 'B+', distance: '3.1 km away', phone: '+1 555-0123' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Blood Donation Bank</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerSubtitle}>Find verified blood donors instantly during medical emergencies.</Text>

        {donors.map((d) => (
          <View key={d.id} style={styles.card}>
            <View style={styles.bloodBadge}>
              <Droplet color="#DC2626" size={20} />
              <Text style={styles.bloodText}>{d.bloodType}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{d.name}</Text>
              <View style={styles.locRow}>
                <MapPin color={Colors.textSecondary} size={12} />
                <Text style={styles.locText}>{d.distance}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.callBtn} onPress={() => alert(`Calling ${d.phone}...`)}>
              <Phone color="#FFFFFF" size={16} />
            </TouchableOpacity>
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
  headerSubtitle: { fontSize: 14, color: Colors.textSecondary, marginBottom: 8 },
  card: { flexDirection: 'row', backgroundColor: Colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: Colors.border, alignItems: 'center' },
  bloodBadge: { width: 50, height: 50, borderRadius: 14, backgroundColor: '#FEE2E2', justifyContent: 'center', alignItems: 'center', gap: 2 },
  bloodText: { fontSize: 13, fontWeight: '800', color: '#DC2626' },
  info: { flex: 1, marginLeft: 14 },
  name: { fontSize: 16, fontWeight: '700', color: Colors.text, marginBottom: 4 },
  locRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  locText: { fontSize: 12, color: Colors.textSecondary },
  callBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#DC2626', justifyContent: 'center', alignItems: 'center' },
});
