import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Users, Plus } from 'lucide-react-native';

export default function FamilyScreen() {
  const router = useRouter();
  const members = [
    { name: 'Sarah Morgan', relation: 'Spouse', age: 32 },
    { name: 'Lucas Morgan', relation: 'Son', age: 7 },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Family Health Profiles</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => alert('Add family member')}><Plus color={Colors.text} size={20} /></TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {members.map((m, i) => (
          <View key={i} style={styles.card}>
            <Users color={Colors.primary} size={22} />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.name}>{m.name}</Text>
              <Text style={styles.rel}>{m.relation} • {m.age} years old</Text>
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
  rel: { fontSize: 13, color: Colors.textSecondary },
});
