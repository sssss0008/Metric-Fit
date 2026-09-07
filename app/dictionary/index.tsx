import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, Search, BookOpen } from 'lucide-react-native';

export default function DictionaryScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const terms = [
    { term: 'Analgesic', definition: 'A medication used to relieve pain (painkiller).' },
    { term: 'Cardiology', definition: 'The branch of medicine dealing with disorders of the heart.' },
    { term: 'Diagnosis', definition: 'The identification of an illness or other problem by examination.' },
    { term: 'Electrocardiogram (ECG)', definition: 'A test that checks for problems with the electrical activity of your heart.' },
    { term: 'Hypertension', definition: 'A condition in which the force of the blood against the artery walls is too high.' },
    { term: 'Neurology', definition: 'The branch of medicine concerned with the study and treatment of disorders of the nervous system.' },
    { term: 'Pediatrics', definition: 'The branch of medicine dealing with the health and medical care of infants, children, and adolescents.' },
    { term: 'Vaccination', definition: 'Treatment with a vaccine to produce immunity against a disease.' },
  ];

  const filteredTerms = terms.filter(t => t.term.toLowerCase().includes(searchQuery.toLowerCase()) || t.definition.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}><ArrowLeft color={Colors.text} size={20} /></TouchableOpacity>
        <Text style={styles.topBarTitle}>Medical Dictionary</Text><View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchContainer}>
          <Search color={Colors.textSecondary} size={20} style={{ marginRight: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search medical terms..."
            placeholderTextColor={Colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        {filteredTerms.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6, gap: 8 }}>
              <BookOpen color={Colors.primary} size={18} />
              <Text style={styles.termTitle}>{item.term}</Text>
            </View>
            <Text style={styles.termDef}>{item.definition}</Text>
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
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: 14, paddingHorizontal: 16, height: 50, borderWidth: 1, borderColor: Colors.border, marginBottom: 8 },
  searchInput: { flex: 1, color: Colors.text, fontSize: 14 },
  card: { backgroundColor: Colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: Colors.border },
  termTitle: { fontSize: 16, fontWeight: '800', color: Colors.text },
  termDef: { fontSize: 13, color: Colors.textSecondary, lineHeight: 18 },
});
