import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { DOCTORS } from '../../src/data/mockData';
import { ArrowLeft, Send, Video, Phone, Paperclip } from 'lucide-react-native';

export default function ChatScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const doctor = DOCTORS.find((d) => d.id === id) || DOCTORS[0];

  const [messages, setMessages] = useState([
    { id: '1', senderId: 'doctor', text: `Hello Alex! I am ${doctor.name}. How can I assist you with your health today?`, time: '10:30 AM' },
    { id: '2', senderId: 'user', text: 'Hi doctor, I wanted to discuss my recent lab test results.', time: '10:32 AM' },
    { id: '3', senderId: 'doctor', text: 'Of course. Please upload or share the details so I can review them.', time: '10:35 AM' },
  ]);

  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      senderId: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setInputText('');

    // Simulate doctor reply
    setTimeout(() => {
      const replyMsg = {
        id: (Date.now() + 1).toString(),
        senderId: 'doctor',
        text: 'Thank you for sharing. I will review this carefully during our scheduled consultation.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <Image source={{ uri: doctor.image }} style={styles.headerAvatar} />
          <View>
            <Text style={styles.headerName} numberOfLines={1}>{doctor.name}</Text>
            <Text style={styles.headerStatus}>Online</Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Phone color={Colors.primary} size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Video color={Colors.primary} size={18} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Messages Scroll */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.chatScroll}>
        {messages.map((msg) => {
          const isUser = msg.senderId === 'user';
          return (
            <View key={msg.id} style={[styles.msgBubbleContainer, isUser ? styles.msgUser : styles.msgDoctor]}>
              {!isUser && <Image source={{ uri: doctor.image }} style={styles.msgAvatar} />}
              <View style={[styles.msgBubble, isUser ? styles.bubbleUser : styles.bubbleDoctor]}>
                <Text style={[styles.msgText, isUser ? styles.textUser : styles.textDoctor]}>{msg.text}</Text>
                <Text style={[styles.msgTime, isUser ? styles.timeUser : styles.timeDoctor]}>{msg.time}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.attachBtn}>
          <Paperclip color={Colors.textSecondary} size={20} />
        </TouchableOpacity>
        <TextInput
          style={styles.inputBox}
          placeholder="Type your message..."
          placeholderTextColor={Colors.textSecondary}
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Send color="#FFFFFF" size={18} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.border,
    marginRight: 10,
  },
  headerName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },
  headerStatus: {
    fontSize: 12,
    color: Colors.success,
    fontWeight: '600',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  chatScroll: {
    padding: 20,
    gap: 16,
  },
  msgBubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  msgUser: {
    justifyContent: 'flex-end',
  },
  msgDoctor: {
    justifyContent: 'flex-start',
  },
  msgAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.border,
  },
  msgBubble: {
    maxWidth: '75%',
    padding: 14,
    borderRadius: 16,
  },
  bubbleUser: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  bubbleDoctor: {
    backgroundColor: Colors.surface,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  msgText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  textUser: {
    color: '#FFFFFF',
  },
  textDoctor: {
    color: Colors.text,
  },
  msgTime: {
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  timeUser: {
    color: 'rgba(255,255,255,0.8)',
  },
  timeDoctor: {
    color: Colors.textSecondary,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: 10,
  },
  attachBtn: {
    padding: 8,
  },
  inputBox: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
