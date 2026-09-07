import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { DOCTORS } from '../../src/data/mockData';
import { ArrowLeft, Star, MapPin, Award, Users, Clock, Heart, ShieldCheck } from 'lucide-react-native';

export default function DoctorDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const doctor = DOCTORS.find((d) => d.id === id) || DOCTORS[0];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Doctor Details</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => setIsFavorite(!isFavorite)}>
          <Heart color={isFavorite ? Colors.error : Colors.text} size={20} fill={isFavorite ? Colors.error : 'none'} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Doctor Header Card */}
        <View style={styles.profileCard}>
          <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>

          <View style={styles.hospitalRow}>
            <MapPin color={Colors.textSecondary} size={14} />
            <Text style={styles.hospitalText}>{doctor.hospital}</Text>
          </View>

          {/* Stats Bar */}
          <View style={styles.statsBar}>
            <View style={styles.statItem}>
              <View style={styles.statIconBox}>
                <Users color={Colors.primary} size={18} />
              </View>
              <Text style={styles.statValue}>{doctor.patientsCount}</Text>
              <Text style={styles.statLabel}>Patients</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <View style={styles.statIconBox}>
                <Award color={Colors.primary} size={18} />
              </View>
              <Text style={styles.statValue}>{doctor.experienceYears}+ Years</Text>
              <Text style={styles.statLabel}>Experience</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <View style={styles.statIconBox}>
                <Star color="#F59E0B" size={18} fill="#F59E0B" />
              </View>
              <Text style={styles.statValue}>{doctor.rating}</Text>
              <Text style={styles.statLabel}>{doctor.reviewsCount} Reviews</Text>
            </View>
          </View>
        </View>

        {/* About Doctor */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Doctor</Text>
          <Text style={styles.aboutText}>{doctor.about}</Text>
        </View>

        {/* Working Hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Days</Text>
          <View style={styles.daysRow}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
              const isAvailable = doctor.availableDays.includes(day);
              return (
                <View key={day} style={[styles.dayChip, isAvailable && styles.dayChipActive]}>
                  <Text style={[styles.dayText, isAvailable && styles.dayTextActive]}>{day}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Booking Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerFeeLabel}>Consultation Fee</Text>
          <View style={styles.feeRow}>
            <Text style={styles.footerFeeAmount}>${doctor.consultationFee}</Text>
            <Text style={styles.footerFeeUnit}> / session</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.bookNowBtn}
          onPress={() => router.push(`/booking/${doctor.id}`)}
        >
          <Text style={styles.bookNowText}>Book Appointment</Text>
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
    backgroundColor: Colors.background,
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
  profileCard: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    marginTop: 10,
    marginBottom: 20,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.border,
    marginBottom: 14,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  doctorSpecialty: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 8,
  },
  hospitalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 20,
  },
  hospitalText: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  statsBar: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    borderRadius: 14,
    padding: 14,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statIconBox: {
    marginBottom: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: Colors.border,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  daysRow: {
    flexDirection: 'row',
    gap: 8,
  },
  dayChip: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  dayChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  dayText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  dayTextActive: {
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
  footerFeeLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  feeRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  footerFeeAmount: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.primary,
  },
  footerFeeUnit: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  bookNowBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
  },
  bookNowText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});
