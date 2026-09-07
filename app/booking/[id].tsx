import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { DOCTORS } from '../../src/data/mockData';
import { ArrowLeft, Calendar, Clock, Video, Phone, User, CheckCircle } from 'lucide-react-native';

export default function BookingScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const doctor = DOCTORS.find((d) => d.id === id) || DOCTORS[0];

  const [selectedDate, setSelectedDate] = useState('Sep 10, 2026');
  const [selectedTime, setSelectedTime] = useState('2:30 PM');
  const [consultType, setConsultType] = useState<'Video Call' | 'Voice Call' | 'In-Person'>('Video Call');
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const dates = [
    { day: 'Wed', date: 'Sep 10' },
    { day: 'Thu', date: 'Sep 11' },
    { day: 'Fri', date: 'Sep 12' },
    { day: 'Sat', date: 'Sep 13' },
    { day: 'Sun', date: 'Sep 14' },
  ];

  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const handleConfirmBooking = () => {
    setIsSuccessModal(true);
  };

  if (isSuccessModal) {
    return (
      <View style={styles.successContainer}>
        <View style={styles.successCard}>
          <CheckCircle color={Colors.success} size={64} style={styles.successIcon} />
          <Text style={styles.successTitle}>Appointment Confirmed!</Text>
          <Text style={styles.successSubtitle}>
            Your appointment with {doctor.name} has been successfully scheduled for {selectedDate} at {selectedTime}.
          </Text>
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => router.push('/(tabs)/appointments')}
          >
            <Text style={styles.doneBtnText}>View Appointments</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Book Appointment</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Doctor Card Snippet */}
        <View style={styles.docMiniCard}>
          <Image source={{ uri: doctor.image }} style={styles.docAvatar} />
          <View style={styles.docMiniInfo}>
            <Text style={styles.docName}>{doctor.name}</Text>
            <Text style={styles.docSpecialty}>{doctor.specialty} • ${doctor.consultationFee}</Text>
          </View>
        </View>

        {/* Consultation Type */}
        <Text style={styles.sectionTitle}>Consultation Type</Text>
        <View style={styles.typeRow}>
          {[
            { type: 'Video Call', icon: Video },
            { type: 'Voice Call', icon: Phone },
            { type: 'In-Person', icon: User },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = consultType === item.type;
            return (
              <TouchableOpacity
                key={item.type}
                style={[styles.typeCard, isSelected && styles.typeCardActive]}
                onPress={() => setConsultType(item.type as any)}
              >
                <Icon color={isSelected ? '#FFFFFF' : Colors.primary} size={22} />
                <Text style={[styles.typeText, isSelected && styles.typeTextActive]}>{item.type}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Select Date */}
        <Text style={styles.sectionTitle}>Select Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.datesScroll} style={styles.datesContainer}>
          {dates.map((d) => {
            const fullDateStr = `${d.date}, 2026`;
            const isSelected = selectedDate === fullDateStr;
            return (
              <TouchableOpacity
                key={d.date}
                style={[styles.dateChip, isSelected && styles.dateChipActive]}
                onPress={() => setSelectedDate(fullDateStr)}
              >
                <Text style={[styles.dayNameText, isSelected && styles.dayNameTextActive]}>{d.day}</Text>
                <Text style={[styles.dateNumText, isSelected && styles.dateNumTextActive]}>{d.date}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Select Time Slot */}
        <Text style={styles.sectionTitle}>Select Time Slot</Text>
        <View style={styles.timesGrid}>
          {times.map((t) => {
            const isSelected = selectedTime === t;
            return (
              <TouchableOpacity
                key={t}
                style={[styles.timeChip, isSelected && styles.timeChipActive]}
                onPress={() => setSelectedTime(t)}
              >
                <Text style={[styles.timeText, isSelected && styles.timeTextActive]}>{t}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Footer Payment & Confirm */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total Payment</Text>
          <Text style={styles.totalAmount}>${doctor.consultationFee}.00</Text>
        </View>
        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirmBooking}>
          <Text style={styles.confirmBtnText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 100,
  },
  docMiniCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 24,
    marginTop: 10,
  },
  docAvatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.border,
  },
  docMiniInfo: {
    marginLeft: 14,
    flex: 1,
  },
  docName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 2,
  },
  docSpecialty: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
    marginTop: 8,
  },
  typeRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  typeCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 8,
  },
  typeCardActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  typeText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
  },
  typeTextActive: {
    color: '#FFFFFF',
  },
  datesContainer: {
    maxHeight: 80,
    marginBottom: 24,
  },
  datesScroll: {
    gap: 10,
  },
  dateChip: {
    width: 70,
    height: 76,
    borderRadius: 14,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 4,
  },
  dateChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  dayNameText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  dayNameTextActive: {
    color: '#FFFFFF',
  },
  dateNumText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.text,
  },
  dateNumTextActive: {
    color: '#FFFFFF',
  },
  timesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  timeChip: {
    width: '30%',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  timeChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },
  timeTextActive: {
    color: '#FFFFFF',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  totalLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
  },
  confirmBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  confirmBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  successContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  successCard: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    width: '100%',
  },
  successIcon: {
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  successSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  doneBtn: {
    backgroundColor: Colors.primary,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  doneBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
