import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { useStore } from '../../src/store/useStore';
import { useThemeColors } from '../../src/hooks/useThemeColors';
import { User, FileText, Heart, CreditCard, Bell, Shield, HelpCircle, LogOut, ChevronRight, Activity, Pill, Droplet, ShieldCheck, Smile, MapPin, Utensils, CheckCircle, Users, Star, Truck, BookOpen, Moon, Sun, Target, ShieldAlert } from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const theme = useStore((state) => state.settings.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />

      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Profile & Features</Text>
      </View>

      {/* User Info Card */}
      <View style={[styles.userCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' }}
          style={styles.userAvatar}
        />
        <View style={styles.userInfo}>
          <Text style={[styles.userName, { color: colors.text }]}>Alex Morgan</Text>
          <Text style={[styles.userEmail, { color: colors.textSecondary }]}>alex.morgan@example.com</Text>
          <View style={[styles.medicalIdBadge, { backgroundColor: colors.primaryLight }]}>
            <Text style={[styles.medicalIdText, { color: colors.primary }]}>Medical ID: #MF-84920</Text>
          </View>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.statValue, { color: colors.text }]}>170 cm</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Height</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.statValue, { color: colors.text }]}>68 kg</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Weight</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.statValue, { color: colors.text }]}>O+</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Blood Type</Text>
        </View>
      </View>

      {/* Emergency Feature */}
      <TouchableOpacity style={styles.emergencyBanner} onPress={() => router.push('/emergency')}>
        <Truck color="#FFFFFF" size={24} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.emergencyTitle}>Emergency SOS & Ambulance</Text>
          <Text style={styles.emergencySub}>Tap for immediate emergency dispatch</Text>
        </View>
      </TouchableOpacity>

      {/* Theme Toggle Item */}
      <View style={[styles.menuItem, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={[styles.menuIconBox, { backgroundColor: theme === 'dark' ? '#1E293B' : '#FEF3C7' }]}>
          {theme === 'dark' ? <Moon color="#38BDF8" size={20} /> : <Sun color="#D97706" size={20} />}
        </View>
        <Text style={[styles.menuText, { color: colors.text }]}>Dark Mode</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          trackColor={{ false: '#CBD5E1', true: colors.primary }}
          thumbColor="#FFFFFF"
        />
      </View>

      {/* Advanced Features Menu */}
      <View style={styles.menuSection}>
        <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Medical & Health Tools</Text>

        {[
          { title: 'Medical Dictionary', route: '/dictionary', icon: BookOpen, color: '#0284C7', bg: '#E0F2FE' },
          { title: 'First Aid & Emergency Guide', route: '/first-aid', icon: ShieldAlert, color: '#DC2626', bg: '#FEE2E2' },
          { title: 'Water & Hydration Tracker', route: '/water-tracker', icon: Droplet, color: '#0284C7', bg: '#E0F2FE' },
          { title: 'Sleep Quality & Cycle', route: '/sleep', icon: Moon, color: '#7C3AED', bg: '#EDE9FE' },
          { title: 'Health Goals Tracker', route: '/goals', icon: Target, color: '#059669', bg: '#D1FAE5' },
          { title: 'Health Vitals & BMI Calculator', route: '/vitals', icon: Activity, color: '#DC2626', bg: '#FEE2E2' },
          { title: 'Medication & Pill Reminder', route: '/medications', icon: Pill, color: '#0284C7', bg: '#E0F2FE' },
          { title: 'Blood Donation Bank', route: '/blood-bank', icon: Droplet, color: '#DC2626', bg: '#FEE2E2' },
          { title: 'Health Insurance Policy', route: '/insurance', icon: ShieldCheck, color: '#059669', bg: '#D1FAE5' },
          { title: 'Mental Health & Meditation', route: '/mental-health', icon: Smile, color: '#7C3AED', bg: '#EDE9FE' },
          { title: 'Hospitals & Clinics Near Me', route: '/hospitals', icon: MapPin, color: '#D97706', bg: '#FEF3C7' },
          { title: 'Diet & Nutrition Plan', route: '/diet', icon: Utensils, color: '#059669', bg: '#D1FAE5' },
          { title: 'Vaccination Records', route: '/vaccines', icon: CheckCircle, color: '#0284C7', bg: '#E0F2FE' },
          { title: 'Family Health Profiles', route: '/family', icon: Users, color: '#7C3AED', bg: '#EDE9FE' },
          { title: 'Medical Bills & Invoices', route: '/billing', icon: CreditCard, color: '#D97706', bg: '#FEF3C7' },
          { title: 'Doctor Reviews & Feedback', route: '/reviews', icon: Star, color: '#DC2626', bg: '#FEE2E2' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <TouchableOpacity
              key={idx}
              style={[styles.menuItem, { backgroundColor: colors.surface, borderColor: colors.border }]}
              onPress={() => router.push(item.route as any)}
            >
              <View style={[styles.menuIconBox, { backgroundColor: item.bg }]}>
                <Icon color={item.color} size={20} />
              </View>
              <Text style={[styles.menuText, { color: colors.text }]}>{item.title}</Text>
              <ChevronRight color={colors.textSecondary} size={18} />
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => router.push('/')}>
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
  },
  userCard: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
  },
  userInfo: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 13,
    marginBottom: 8,
  },
  medicalIdBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  medicalIdText: {
    fontSize: 11,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  emergencyBanner: {
    flexDirection: 'row',
    backgroundColor: '#EF4444',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  emergencySub: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
  },
  menuSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
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
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 16,
  },
});
