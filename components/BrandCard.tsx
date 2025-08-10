import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { Brand } from '../services/api';

interface BrandCardProps {
  brand: Brand;
  onPress: () => void;
}

export default function BrandCard({ brand, onPress }: BrandCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{
      backgroundColor: '#FFF', margin: 10, borderRadius: 12, elevation: 2, padding: 18,
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: brand.avatar }} style={{ width: 48, height: 48, borderRadius: 8, marginRight: 12 }} />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{brand.name}</Text>
          <Text style={{ color: '#555' }}>{brand.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
