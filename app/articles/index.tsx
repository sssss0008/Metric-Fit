import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../src/constants/Colors';
import { HEALTH_ARTICLES } from '../../src/data/mockData';
import { ArrowLeft, Clock, Calendar } from 'lucide-react-native';

export default function ArticlesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ArrowLeft color={Colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Health Articles & Tips</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {HEALTH_ARTICLES.map((art) => (
          <TouchableOpacity
            key={art.id}
            style={styles.articleCard}
            onPress={() => router.push(`/articles/${art.id}`)}
          >
            <Image source={{ uri: art.image }} style={styles.articleImage} />
            <View style={styles.articleContent}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{art.category}</Text>
              </View>
              <Text style={styles.articleTitle} numberOfLines={2}>{art.title}</Text>
              <View style={styles.articleMeta}>
                <View style={styles.metaItem}>
                  <Calendar color={Colors.textSecondary} size={12} />
                  <Text style={styles.metaText}>{art.date}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Clock color={Colors.textSecondary} size={12} />
                  <Text style={styles.metaText}>{art.readTime}</Text>
                </View>
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
    gap: 16,
    paddingTop: 10,
  },
  articleCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  articleImage: {
    width: '100%',
    height: 160,
    backgroundColor: Colors.border,
  },
  articleContent: {
    padding: 16,
  },
  categoryBadge: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: '700',
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 10,
    lineHeight: 22,
  },
  articleMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
});
