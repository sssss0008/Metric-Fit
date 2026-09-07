import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { INITIAL_APPOINTMENTS, Appointment } from '../../src/data/mockData';
import { Calendar, Clock, Video, MapPin, CheckCircle, AlertCircle } from 'lucide-react-native';

export default function AppointmentsScreen() {
  const router = useRouter();
  const [tab, setTab] = useState<'Upcoming' | 'Completed' | 'Cancelled'>('Upcoming');
  const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);

  const filteredAppointments = appointments.filter((apt) => apt.status === tab);

  const handleCancel = (id: string) => {
    setAppointments(appointments.map(apt => apt.id === id ? { ...apt, status: 'Cancelled' as const } : apt));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
        <Text style={styles.subtitle}>Manage your scheduled and past consultations</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {(['Upcoming', 'Completed', 'Cancelled'] as const).map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.tabBtn, tab === t && styles.tabBtnActive]}
            onPress={() => setTab(t)}
          >
            <Text style={[styles.tabText, tab === t && styles.tabTextActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Appointments List */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer}>
        {filteredAppointments.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Calendar color={Colors.textSecondary} size={48} />
            <Text style={styles.emptyTitle}>No {tab.toLowerCase()} appointments</Text>
            <Text style={styles.emptySubtitle}>Book an appointment with a specialist today.</Text>
            <TouchableOpacity style={styles.exploreBtn} onPress={() => router.push('/(tabs)/explore')}>
              <Text style={styles.exploreBtnText}>Explore Doctors</Text>
            </TouchableOpacity>
          </View>
        ) : (
          filteredAppointments.map((apt) => (
            <View key={apt.id} style={styles.aptCard}>
              <View style={styles.aptHeader}>
                <Image source={{ uri: apt.doctorImage }} style={styles.aptDoctorImage} />
                <View style={styles.aptHeaderInfo}>
                  <Text style={styles.aptDoctorName}>{apt.doctorName}</Text>
                  <Text style={styles.aptSpecialty}>{apt.specialty}</Text>
                  <View style={[styles.statusBadge, apt.status === 'Upcoming' ? styles.statusUpcoming : apt.status === 'Completed' ? styles.statusCompleted : styles.statusCancelled]}>
                    <Text style={[styles.statusText, apt.status === 'Upcoming' ? styles.statusTextUpcoming : apt.status === 'Completed' ? styles.statusTextCompleted : styles.statusTextCancelled]}>{apt.status}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.aptDetailsRow}>
                <View style={styles.aptDetailItem}>
                  <Calendar color={Colors.primary} size={16} />
                  <Text style={styles.aptDetailText}>{apt.date}</Text>
                </View>
                <View style={styles.aptDetailItem}>
                  <Clock color={Colors.primary} size={16} />
                  <Text style={styles.aptDetailText}>{apt.time}</Text>
                </View>
                <View style={styles.aptDetailItem}>
                  <Video color={Colors.primary} size={16} />
                  <Text style={styles.aptDetailText}>{apt.type}</Text>
                </View>
              </View>

              {apt.location && (
                <View style={styles.locationRow}>
                  <MapPin color={Colors.textSecondary} size={14} />
                  <Text style={styles.locationText}>{apt.location}</Text>
                </View>
              )}

              {apt.status === 'Upcoming' && (
                <View style={styles.actionRow}>
                  <TouchableOpacity style={styles.cancelBtn} onPress={() => handleCancel(apt.id)}>
                    <Text style={styles.cancelBtnText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.joinBtn} onPress={() => router.push(`/chat/${apt.doctorId}`)}>
                    <Text style={styles.joinBtnText}>Chat with Doctor</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    marginTop: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  tabBtnActive: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  listContainer: {
    gap: 16,
    paddingBottom: 30,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 16,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  exploreBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  exploreBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  aptCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  aptHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aptDoctorImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.border,
  },
  aptHeaderInfo: {
    flex: 1,
    marginLeft: 14,
  },
  aptDoctorName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 2,
  },
  aptSpecialty: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 6,
  },
  statusUpcoming: {
    backgroundColor: '#E0F2FE',
  },
  statusCompleted: {
    backgroundColor: '#D1FAE5',
  },
  statusCancelled: {
    backgroundColor: '#FEE2E2',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  statusTextUpcoming: {
    color: '#0369A1',
  },
  statusTextCompleted: {
    color: '#065F46',
  },
  statusTextCancelled: {
    color: '#991B1B',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 14,
  },
  aptDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  aptDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  aptDetailText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  locationText: {
    fontSize: 12,
    color: Colors.textSecondary,
    flex: 1,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelBtnText: {
    color: Colors.error,
    fontWeight: '700',
    fontSize: 13,
  },
  joinBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  joinBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
