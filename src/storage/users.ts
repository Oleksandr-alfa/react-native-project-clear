// import AsyncStorage from '@react-native-async-storage/async-storage';

// const KEY = 'users';

// export async function getUsers() {
//   const data = await AsyncStorage.getItem(KEY);
//   return data ? JSON.parse(data) : [];
// }

// export async function addUser(newUser) {
//   const users = await getUsers();
//   const updated = [...users, newUser];
//   await AsyncStorage.setItem(KEY, JSON.stringify(updated));
//   return updated;
// }

// export async function removeUser(id) {
//   const users = await getUsers();
//   const updated = users.filter(u => u.id !== id);
//   await AsyncStorage.setItem(KEY, JSON.stringify(updated));
//   return updated;
// }
