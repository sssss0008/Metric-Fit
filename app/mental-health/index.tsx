import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Smile, Play } from 'lucide-react-native';

export default function MentalHealthScreen() {
  const router = useRouter();
  const sessions = [
    { id: '1', title: 'Stress Relief Breathing', duration: '10 mins', category: 'Mindfulness' },
    { id: '2', title: 'Deep Sleep Meditation', duration: '20 mins', category: 'Sleep' },
    { id: '3', title: 'Anxiety Calming Exercise', duration: '15 mins', category: 'Relaxation' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Mental Health & Wellness</Text>
        <View style={{ width: 40 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerSubtitle}>Guided meditations, breathing exercises, and stress relief sessions.</Text>
        {sessions.map(s => (
          <TouchableOpacity key={s.id} style={styles.card} onPress={() => alert(`Playing session: ${s.title}`)}>
            <View style={styles.iconBox}>
              <Smile color={Colors.primary} size={22} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>{s.title}</Text>
              <Text style={styles.sub}>{s.category} • {s.duration}</Text>
            </View>
            <Play color={Colors.primary} size={20} fill={Colors.primary} />
          </TouchableOpacity>
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
  iconBox: { width: 44, height: 44, borderRadius: 12, backgroundColor: Colors.primaryLight, justifyContent: 'center', alignItems: 'center' },
  info: { flex: 1, marginLeft: 14 },
  title: { fontSize: 16, fontWeight: '700', color: Colors.text, marginBottom: 2 },
  sub: { fontSize: 13, color: Colors.textSecondary },
});
