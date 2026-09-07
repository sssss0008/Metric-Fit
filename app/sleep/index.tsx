import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Moon } from 'lucide-react-native';

export default function SleepScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Sleep Quality & Cycle</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Moon color="#7C3AED" size={32} />
          <Text style={styles.title}>Last Night's Sleep</Text>
          <Text style={styles.val}>7 hours 45 mins</Text>
          <Text style={styles.sub}>Deep Sleep: 2h 30m • REM: 1h 50m • Quality: Excellent</Text>
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
  val: { fontSize: 26, fontWeight: '800', color: '#7C3AED', marginBottom: 8 },
  sub: { fontSize: 13, color: Colors.textSecondary, textAlign: 'center' },
});
