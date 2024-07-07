import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const userProfile = {
  name: '',
  email: 'jamaluddinkafi74@gmail.com',
  profileImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIgYHwYzrB7ZrLK6-41cW8FL255otFHkvfA&s',
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: userProfile.profileImage}}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{userProfile.name}</Text>
      <Text style={styles.email}>{userProfile.email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
