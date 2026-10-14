import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function AddressMapSnippet({ address }) {
  // Координаты объекта (например, передаются из параметров экрана)
  const location = {
    latitude: address?.latitude || 56.9496,   // Пример (Рига)
    longitude: address?.longitude || 24.1052,
    latitudeDelta: 0.005,  // Маленькое значение = сильный зум (кусочек карты)
    longitudeDelta: 0.005,
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Расположение на карте</Text>
      
      {/* Контейнер для кусочка карты */}
      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          region={location}
          scrollEnabled={false}     // Отключаем скролл карты пальцем (если это просто превью)
          zoomEnabled={false}       // Отключаем зум жестами
          rotateEnabled={false}     // Отключаем поворот
        >
          <Marker 
            coordinate={{ 
              latitude: location.latitude, 
              longitude: location.longitude 
            }}
            title={address?.title}
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  mapWrapper: {
    height: 180,              // Фиксированная небольшая высота для «кусочка»
    width: '100%',
    borderRadius: 12,         // Скругления углов карточки
    overflow: 'hidden',       // Обязательно, чтобы карта не вылезала за скругления
  },
  map: {
    flex: 1,
  },
});