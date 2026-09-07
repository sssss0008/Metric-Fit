import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Colors } from '../../src/constants/Colors';
import { User, FileText, Heart, CreditCard, Bell, Shield, HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* User Info Card */}
      <View style={styles.userCard}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' }}
          style={styles.userAvatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Alex Morgan</Text>
          <Text style={styles.userEmail}>alex.morgan@example.com</Text>
          <View style={styles.medicalIdBadge}>
            <Text style={styles.medicalIdText}>Medical ID: #MF-84920</Text>
          </View>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>170 cm</Text>
          <Text style={styles.statLabel}>Height</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>68 kg</Text>
          <Text style={styles.statLabel}>Weight</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>O+</Text>
          <Text style={styles.statLabel}>Blood Type</Text>
        </View>
      </View>

      {/* Menu Sections */}
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Medical Records</Text>
        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.menuIconBox, { backgroundColor: '#E0F2FE' }]}>
            <FileText color="#0284C7" size={20} />
          </View>
          <Text style={styles.menuText}>My Prescriptions & Reports</Text>
          <ChevronRight color={Colors.textSecondary} size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.menuIconBox, { backgroundColor: '#FEE2E2' }]}>
            <Heart color="#DC2626" size={20} />
          </View>
          <Text style={styles.menuText}>Favorite Doctors</Text>
          <ChevronRight color={Colors.textSecondary} size={18} />
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Settings & Preferences</Text>
        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.menuIconBox, { backgroundColor: '#FEF3C7' }]}>
            <CreditCard color="#D97706" size={20} />
          </View>
          <Text style={styles.menuText}>Payment Methods</Text>
          <ChevronRight color={Colors.textSecondary} size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.menuIconBox, { backgroundColor: '#D1FAE5' }]}>
            <Bell color="#059669" size={20} />
          </View>
          <Text style={styles.menuText}>Notifications</Text>
          <ChevronRight color={Colors.textSecondary} size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.menuIconBox, { backgroundColor: '#EDE9FE' }]}>
            <Shield color="#7C3AED" size={20} />
          </View>
          <Text style={styles.menuText}>Privacy & Security</Text>
          <ChevronRight color={Colors.textSecondary} size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.menuIconBox, { backgroundColor: '#F1F5F9' }]}>
            <HelpCircle color="#64748B" size={20} />
          </View>
          <Text style={styles.menuText}>Help & Support</Text>
          <ChevronRight color={Colors.textSecondary} size={18} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutBtn}>
        <LogOut color={Colors.error} size={20} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

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
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.text,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: Colors.border,
  },
  userInfo: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  medicalIdBadge: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  medicalIdText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  menuSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  menuIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: 14,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },
  logoutText: {
    color: Colors.error,
    fontWeight: '700',
    fontSize: 16,
  },
});
