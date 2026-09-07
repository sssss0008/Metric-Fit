import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { SYMPTOMS_LIST, DOCTORS } from '../../src/data/mockData';
import { ArrowLeft, CheckCircle2, AlertCircle, Search } from 'lucide-react-native';

export default function SymptomsScreen() {
  const router = useRouter();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (name: string) => {
    if (selectedSymptoms.includes(name)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== name));
    } else {
      setSelectedSymptoms([...selectedSymptoms, name]);
    }
  };

  const matchedSpecialties = Array.from(
    new Set(
      SYMPTOMS_LIST.filter((s) => selectedSymptoms.includes(s.name)).map((s) => s.specialty)
    )
  );

  const matchedDoctors = DOCTORS.filter((doc) => matchedSpecialties.includes(doc.specialty));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>AI Symptom Checker</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>What are you experiencing?</Text>
        <Text style={styles.headerSubtitle}>Select your symptoms to find the right specialist instantly.</Text>

        <View style={styles.symptomsGrid}>
          {SYMPTOMS_LIST.map((sym) => {
            const isSelected = selectedSymptoms.includes(sym.name);
            return (
              <TouchableOpacity
                key={sym.id}
                style={[styles.symptomCard, isSelected && styles.symptomCardActive]}
                onPress={() => toggleSymptom(sym.name)}
              >
                <Text style={[styles.symptomText, isSelected && styles.symptomTextActive]}>{sym.name}</Text>
                {isSelected && <CheckCircle2 color="#FFFFFF" size={18} />}
              </TouchableOpacity>
            );
          })}
        </View>

        {selectedSymptoms.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>Recommended Specialists</Text>
            {matchedSpecialties.map((spec) => (
              <View key={spec} style={styles.specBadge}>
                <Text style={styles.specBadgeText}>Specialty: {spec}</Text>
              </View>
            ))}

            <Text style={[styles.resultsTitle, { marginTop: 20 }]}>Available Doctors</Text>
            {matchedDoctors.map((doc) => (
              <TouchableOpacity
                key={doc.id}
                style={styles.docCard}
                onPress={() => router.push(`/doctor/${doc.id}`)}
              >
                <View>
                  <Text style={styles.docName}>{doc.name}</Text>
                  <Text style={styles.docSpec}>{doc.specialty} • ${doc.consultationFee}</Text>
                </View>
                <Text style={styles.bookText}>Book &gt;</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  topBarTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  symptomsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  symptomCard: {
    width: '48%',
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  symptomCardActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  symptomText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },
  symptomTextActive: {
    color: '#FFFFFF',
  },
  resultsContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 12,
  },
  specBadge: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  specBadgeText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 13,
  },
  docCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  docName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 2,
  },
  docSpec: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  bookText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});
