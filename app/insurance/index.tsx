import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react-native';

export default function InsuranceScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Health Insurance Policy</Text>
        <View style={{ width: 40 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.policyCard}>
          <ShieldCheck color={Colors.primary} size={32} />
          <Text style={styles.policyTitle}>Global Health Premier Plan</Text>
          <Text style={styles.policyNumber}>Policy ID: GH-9948201-AX</Text>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Coverage Limit</Text>
            <Text style={styles.val}>$500,000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Deductible Remaining</Text>
            <Text style={styles.val}>$250.00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <Text style={[styles.val, { color: Colors.success }]}>Active & Verified</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10 },
  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  topBarTitle: { fontSize: 17, fontWeight: '700', color: Colors.text },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 10 },
  policyCard: { backgroundColor: Colors.surface, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: Colors.border },
  policyTitle: { fontSize: 18, fontWeight: '800', color: Colors.text, marginTop: 12, marginBottom: 4 },
  policyNumber: { fontSize: 13, color: Colors.textSecondary, marginBottom: 16 },
  divider: { height: 1, backgroundColor: Colors.border, marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  label: { fontSize: 14, color: Colors.textSecondary },
  val: { fontSize: 14, fontWeight: '700', color: Colors.text },
});
