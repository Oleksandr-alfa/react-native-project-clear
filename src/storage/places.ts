// import AsyncStorage from '@react-native-async-storage/async-storage';

// const KEY = 'places';

// export async function getPlaces() {
//   const data = await AsyncStorage.getItem(KEY);
//   return data ? JSON.parse(data) : [];
// }

// export async function addPlace(place) {
//   const places = await getPlaces();
//   const updated = [...places, place];
//   await AsyncStorage.setItem(KEY, JSON.stringify(updated));
//   return updated;
// }

// export async function removePlace(id) {
//   const places = await getPlaces();
//   const updated = places.filter(p => p.id !== id);
//   await AsyncStorage.setItem(KEY, JSON.stringify(updated));
//   return updated;
// }
