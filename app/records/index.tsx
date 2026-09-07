import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, FileText, Download, Share2, Calendar } from 'lucide-react-native';

export default function MedicalRecordsScreen() {
  const router = useRouter();

  const records = [
    { id: 'rec-1', title: 'Complete Blood Count (CBC)', doctor: 'Dr. Emily Watson, M.D.', date: 'Aug 20, 2026', status: 'Normal' },
    { id: 'rec-2', title: 'ECG Cardiac Report', doctor: 'Dr. Jenny Wilson, M.D.', date: 'Jul 15, 2026', status: 'Reviewed' },
    { id: 'rec-3', title: 'Dental Panoramic X-Ray', doctor: 'Dr. Sarah Johnson, D.D.S.', date: 'Jun 10, 2026', status: 'Normal' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Medical Records & Lab Reports</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerSubtitle}>Securely access your clinical lab tests, prescriptions, and imaging reports.</Text>

        {records.map((rec) => (
          <View key={rec.id} style={styles.recordCard}>
            <View style={styles.recordHeader}>
              <View style={styles.fileIconBox}>
                <FileText color={Colors.primary} size={24} />
              </View>
              <View style={styles.recordInfo}>
                <Text style={styles.recordTitle}>{rec.title}</Text>
                <Text style={styles.recordDoctor}>{rec.doctor}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.recordFooter}>
              <View style={styles.dateRow}>
                <Calendar color={Colors.textSecondary} size={13} />
                <Text style={styles.dateText}>{rec.date}</Text>
              </View>
              <View style={styles.actionsRow}>
                <TouchableOpacity style={styles.actionIconBtn} onPress={() => alert('Downloading report...')}>
                  <Download color={Colors.primary} size={16} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIconBtn} onPress={() => alert('Sharing report...')}>
                  <Share2 color={Colors.primary} size={16} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
    paddingTop: 10,
    gap: 16,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  recordCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  recordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordInfo: {
    flex: 1,
    marginLeft: 14,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 2,
  },
  recordDoctor: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 14,
  },
  recordFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dateText: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionIconBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
