import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { DOCTORS, CATEGORIES } from '../../src/data/mockData';
import { Search, Star, Filter, MapPin } from 'lucide-react-native';

export default function ExploreScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesCat = selectedCategory === 'All' || doc.specialty.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) || doc.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Find Doctors</Text>
        <Text style={styles.subtitle}>Book appointments with expert specialists</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <Search color={Colors.textSecondary} size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctors, hospitals..."
            placeholderTextColor={Colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Filter color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </View>

      {/* Categories Filter */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer} style={styles.categoriesScroll}>
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

      {/* Results Count */}
      <Text style={styles.resultsCount}>{filteredDoctors.length} doctors available</Text>

      {/* Doctors List */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.doctorsList}>
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
                  <Star color="#F59E0B" size={13} fill="#F59E0B" />
                  <Text style={styles.ratingText}>{doc.rating}</Text>
                </View>
              </View>
              <Text style={styles.doctorSpecialty}>{doc.specialty}</Text>

              <View style={styles.hospitalRow}>
                <MapPin color={Colors.textSecondary} size={12} />
                <Text style={styles.hospitalText} numberOfLines={1}>{doc.hospital}</Text>
              </View>

              <View style={styles.doctorFooter}>
                <View style={styles.feeContainer}>
                  <Text style={styles.feeAmount}>${doc.consultationFee}</Text>
                  <Text style={styles.feeLabel}>/ session</Text>
                </View>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => router.push(`/doctor/${doc.id}`)}
                >
                  <Text style={styles.bookButtonText}>Book Appointment</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  searchRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: Colors.text,
    fontSize: 15,
  },
  filterBtn: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesScroll: {
    maxHeight: 50,
    marginBottom: 16,
  },
  categoriesContainer: {
    gap: 10,
    alignItems: 'center',
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
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
  resultsCount: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 14,
    fontWeight: '600',
  },
  doctorsList: {
    gap: 14,
    paddingBottom: 30,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  doctorImage: {
    width: 84,
    height: 100,
    borderRadius: 12,
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
    marginBottom: 2,
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
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 6,
  },
  hospitalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 4,
  },
  hospitalText: {
    fontSize: 12,
    color: Colors.textSecondary,
    flex: 1,
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
    fontSize: 15,
    fontWeight: '800',
    color: Colors.text,
  },
  feeLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginLeft: 2,
  },
  bookButton: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  bookButtonText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 12,
  },
});
