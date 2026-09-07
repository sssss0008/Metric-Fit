import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Droplet, Plus } from 'lucide-react-native';

export default function WaterTrackerScreen() {
  const router = useRouter();
  const [glasses, setGlasses] = useState(5);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Water & Hydration Tracker</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Droplet color="#0284C7" size={32} />
          <Text style={styles.title}>Today's Hydration</Text>
          <Text style={styles.val}>{glasses} / 8 Glasses</Text>
          <TouchableOpacity style={styles.addBtn} onPress={() => setGlasses(glasses + 1)}>
            <Plus color="#FFFFFF" size={18} />
            <Text style={styles.addText}>Drink Glass (250ml)</Text>
          </TouchableOpacity>
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
  card: { backgroundColor: Colors.surface, borderRadius: 20, padding: 24, borderWidth: 1, borderColor: Colors.border, alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '700', color: Colors.text, marginTop: 12, marginBottom: 4 },
  val: { fontSize: 28, fontWeight: '800', color: '#0284C7', marginBottom: 20 },
  addBtn: { flexDirection: 'row', backgroundColor: '#0284C7', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 14, alignItems: 'center', gap: 8 },
  addText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
});
