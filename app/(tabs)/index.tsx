import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { DOCTORS, CATEGORIES, Doctor } from '../../src/data/mockData';
import { Search, Bell, MapPin, Star, Calendar, ShieldCheck, Heart, ArrowRight, Activity, FileText, ShoppingBag, BookOpen } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesCat = selectedCategory === 'All' || doc.specialty.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <View style={styles.locationRow}>
            <MapPin color={Colors.primary} size={14} />
            <Text style={styles.locationText}>New York, USA</Text>
          </View>
          <Text style={styles.greetingTitle}>Hi, Alex 👋</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn} onPress={() => router.push('/notifications')}>
          <Bell color={Colors.text} size={22} />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Search color={Colors.textSecondary} size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search doctor, symptoms, conditions..."
          placeholderTextColor={Colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Quick Services Grid */}
      <View style={styles.quickServicesGrid}>
        <TouchableOpacity style={styles.quickServiceItem} onPress={() => router.push('/symptoms')}>
          <View style={[styles.quickServiceIcon, { backgroundColor: '#E0F2FE' }]}>
            <Activity color="#0284C7" size={22} />
          </View>
          <Text style={styles.quickServiceText}>Symptom Checker</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickServiceItem} onPress={() => router.push('/pharmacy')}>
          <View style={[styles.quickServiceIcon, { backgroundColor: '#FEF3C7' }]}>
            <ShoppingBag color="#D97706" size={22} />
          </View>
          <Text style={styles.quickServiceText}>Pharmacy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickServiceItem} onPress={() => router.push('/records')}>
          <View style={[styles.quickServiceIcon, { backgroundColor: '#D1FAE5' }]}>
            <FileText color="#059669" size={22} />
          </View>
          <Text style={styles.quickServiceText}>Lab Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickServiceItem} onPress={() => router.push('/articles')}>
          <View style={[styles.quickServiceIcon, { backgroundColor: '#EDE9FE' }]}>
            <BookOpen color="#7C3AED" size={22} />
          </View>
          <Text style={styles.quickServiceText}>Health Tips</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <View style={styles.bannerBadge}>
            <ShieldCheck color="#FFFFFF" size={14} />
            <Text style={styles.bannerBadgeText}>Verified Doctors</Text>
          </View>
          <Text style={styles.bannerTitle}>Looking for Specialist Doctors?</Text>
          <Text style={styles.bannerSubtitle}>Schedule video consultation with top medical experts easily.</Text>
          <TouchableOpacity style={styles.bannerButton} onPress={() => router.push('/(tabs)/explore')}>
            <Text style={styles.bannerButtonText}>Consult Now</Text>
            <ArrowRight color="#FFFFFF" size={16} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories / Specialties */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        <TouchableOpacity
          style={[styles.categoryChip, selectedCategory === 'All' && styles.categoryChipActive]}
          onPress={() => setSelectedCategory('All')}
        >
          <Text style={[styles.categoryText, selectedCategory === 'All' && styles.categoryTextActive]}>All</Text>
        </TouchableOpacity>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.categoryChip, selectedCategory === cat.name && styles.categoryChipActive]}
            onPress={() => setSelectedCategory(cat.name)}
          >
            <Text style={[styles.categoryText, selectedCategory === cat.name && styles.categoryTextActive]}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Top Doctors */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Doctors</Text>
        <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.doctorsList}>
        {filteredDoctors.map((doc) => (
          <TouchableOpacity
            key={doc.id}
            style={styles.doctorCard}
            onPress={() => router.push(`/doctor/${doc.id}`)}
          >
            <Image source={{ uri: doc.image }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <View style={styles.doctorTopRow}>
                <Text style={styles.doctorName} numberOfLines={1}>{doc.name}</Text>
                <View style={styles.ratingBadge}>
                  <Star color="#F59E0B" size={14} fill="#F59E0B" />
                  <Text style={styles.ratingText}>{doc.rating}</Text>
                </View>
              </View>
              <Text style={styles.doctorSpecialty}>{doc.specialty} • {doc.hospital}</Text>

              <View style={styles.doctorFooter}>
                <View style={styles.feeContainer}>
                  <Text style={styles.feeAmount}>${doc.consultationFee}</Text>
                  <Text style={styles.feeLabel}>/ session</Text>
                </View>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => router.push(`/doctor/${doc.id}`)}
                >
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    color: Colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
  },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
  },
  quickServicesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickServiceItem: {
    alignItems: 'center',
    flex: 1,
  },
  quickServiceIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  quickServiceText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: Colors.text,
    fontSize: 15,
  },
  banner: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    overflow: 'hidden',
  },
  bannerContent: {
    maxWidth: '85%',
  },
  bannerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
    gap: 4,
  },
  bannerBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  bannerSubtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    marginBottom: 16,
    lineHeight: 18,
  },
  bannerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
    gap: 6,
  },
  bannerButtonText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
  categoriesContainer: {
    gap: 10,
    marginBottom: 24,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 4,
  },
  categoryChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryText: {
    color: Colors.textSecondary,
    fontWeight: '600',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  doctorsList: {
    gap: 14,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: Colors.border,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 14,
  },
  doctorTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    flex: 1,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#92400E',
  },
  doctorSpecialty: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  doctorFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  feeAmount: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.primary,
  },
  feeLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginLeft: 2,
  },
  bookButton: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  bookButtonText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 13,
  },
});
