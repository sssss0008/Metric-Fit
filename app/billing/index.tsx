import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, CreditCard } from 'lucide-react-native';

export default function BillingScreen() {
  const router = useRouter();
  const bills = [
    { title: 'Cardiology Video Consultation', amount: '$120.00', date: 'Sep 02, 2026', status: 'Paid' },
    { title: 'Dental Clean & Checkup', amount: '$90.00', date: 'Aug 25, 2026', status: 'Paid' },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Medical Bills & Invoices</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {bills.map((b, i) => (
          <View key={i} style={styles.card}>
            <CreditCard color={Colors.primary} size={22} />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.title}>{b.title}</Text>
              <Text style={styles.date}>{b.date} • <Text style={{ color: Colors.success, fontWeight: '700' }}>{b.status}</Text></Text>
            </View>
            <Text style={styles.amt}>{b.amount}</Text>
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
  title: { fontSize: 15, fontWeight: '700', color: Colors.text, marginBottom: 2 },
  date: { fontSize: 13, color: Colors.textSecondary },
  amt: { fontSize: 16, fontWeight: '800', color: Colors.text },
});
