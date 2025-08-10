import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchBrandById, Brand } from '../services/api';

export default function BrandDetailScreen({ route }: any) {
  const { brandId } = route.params;
  const [brand, setBrand] = useState<Brand | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBrandById(brandId)
      .then(setBrand)
      .catch(() => setError('Could not fetch details.'))
      .finally(() => setLoading(false));
  }, [brandId]);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text style={{ color: 'red' }}>{error}</Text>;
  if (!brand) return <Text>No data found.</Text>;

  return (
    <LinearGradient colors={['#FCF6B1', '#F9D6E2']} style={styles.container}>
      <Image source={{ uri: brand.avatar }} style={styles.logo} />
      <Text style={styles.title}>{brand.name}</Text>
      <Text style={styles.subtitle}>{brand.email}</Text>
      <Text style={styles.details}>{brand.details || 'No details available.'}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  logo: { width: 90, height: 90, borderRadius: 16, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#555', marginBottom: 11 },
  details: { fontSize: 16, marginBottom: 17, color: '#222' }
});
