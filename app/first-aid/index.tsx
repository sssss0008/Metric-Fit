import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, ShieldAlert } from 'lucide-react-native';

export default function FirstAidScreen() {
  const router = useRouter();
  const guides = [
    { title: 'Cuts & Bleeding', steps: '1. Apply direct pressure with clean cloth.\n2. Elevate the wound.\n3. Clean with mild soap and water once bleeding stops.' },
    { title: 'Burns & Scalds', steps: '1. Cool burn under cool running water for 10-20 mins.\n2. Remove jewelry or tight items.\n3. Cover loosely with sterile cling wrap.' },
    { title: 'Choking / Heimlich', steps: '1. Stand behind the person.\n2. Wrap arms around waist.\n3. Give 5 sharp abdominal thrusts inward and upward.' },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>First Aid & Emergency Guide</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {guides.map((g, i) => (
          <View key={i} style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 }}>
              <ShieldAlert color={Colors.error} size={20} />
              <Text style={styles.title}>{g.title}</Text>
            </View>
            <Text style={styles.steps}>{g.steps}</Text>
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
  title: { fontSize: 16, fontWeight: '800', color: Colors.text },
  steps: { fontSize: 13, color: Colors.textSecondary, lineHeight: 20 },
});
