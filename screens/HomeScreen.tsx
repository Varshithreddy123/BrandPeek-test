import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchBrands, Brand } from '../services/api';
import BrandCard from '../components/BrandCard';

export default function HomeScreen({ navigation }: any) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBrands().then(setBrands)
      .catch(() => setError('Could not fetch data.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <LinearGradient colors={['#8EC5FC', '#E0C3FC']} style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 24, color: '#222' }}>
        Brand Discovery
      </Text>
      {loading ? <ActivityIndicator size="large" /> :
        error ? <Text style={{ color: 'red', padding: 16 }}>{error}</Text> :
        <ScrollView>
          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              onPress={() => navigation.navigate('BrandDetail', { brandId: brand.id })}
            />
          ))}
        </ScrollView>
      }
    </LinearGradient>
  );
}
