import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { ArrowLeft, PhoneCall, AlertTriangle, ShieldAlert, Truck, MapPin } from 'lucide-react-native';

export default function EmergencyScreen() {
  const router = useRouter();
  const [dispatched, setDispatched] = useState(false);

  const handleDispatch = () => {
    setDispatched(true);
    Alert.alert('Emergency Dispatched', 'Ambulance is en route to your current GPS location (New York, USA). Estimated arrival: 8 mins.');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Emergency SOS</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.warningCard}>
          <ShieldAlert color={Colors.error} size={36} />
          <Text style={styles.warningTitle}>Immediate Medical Dispatch</Text>
          <Text style={styles.warningSubtitle}>Pressing emergency SOS instantly alerts nearby dispatchers and shares your medical ID with emergency responders.</Text>
        </View>

        <TouchableOpacity
          style={[styles.sosButton, dispatched && styles.sosDispatched]}
          onPress={handleDispatch}
        >
          <Truck color="#FFFFFF" size={48} />
          <Text style={styles.sosText}>{dispatched ? 'AMBULANCE DISPATCHED' : 'TAP FOR EMERGENCY AMBULANCE'}</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Contacts</Text>
          <TouchableOpacity style={styles.contactCard} onPress={() => alert('Calling 911...')}>
            <PhoneCall color={Colors.primary} size={22} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>National Emergency Services</Text>
              <Text style={styles.contactNumber}>Dial 911 (24/7 Free)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactCard} onPress={() => alert('Calling City Hospital ER...')}>
            <PhoneCall color={Colors.primary} size={22} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>City Hospital Emergency Room</Text>
              <Text style={styles.contactNumber}>+1 (800) 555-0199</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
  },
  warningCard: {
    backgroundColor: '#FEE2E2',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    marginBottom: 30,
    width: '100%',
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#991B1B',
    marginTop: 10,
    marginBottom: 6,
  },
  warningSubtitle: {
    fontSize: 13,
    color: '#7F1D1D',
    textAlign: 'center',
    lineHeight: 18,
  },
  sosButton: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: Colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: Colors.error,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
    padding: 20,
  },
  sosDispatched: {
    backgroundColor: Colors.success,
  },
  sosText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 10,
  },
  section: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  contactInfo: {
    marginLeft: 14,
    flex: 1,
  },
  contactName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 2,
  },
  contactNumber: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
});
