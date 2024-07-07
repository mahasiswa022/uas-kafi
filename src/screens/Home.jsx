import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// Data dummy produk sandal
const sandals = [
  {
    id: '1',
    name: 'Sandal Kulit',
    price: 'Rp 150.000',
    image: 'https://img.ws.mms.shopee.co.id/sg-11134201-22090-a3vp9wpo2yhv64',
  },
  {
    id: '2',
    name: 'Sandal Karet',
    price: 'Rp 50.000',
    image:
      'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/21/ae65f88d-23a9-4619-835b-17648a0f9684.jpg',
  },
  {
    id: '3',
    name: 'Sandal Jepit',
    price: 'Rp 20.000',
    image:
      'data:image/jpeg;base64,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',
  },
  // Tambahkan lebih banyak data sandal jika diperlukan
];

const Home = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Toko Sandal Pria</Text>
      <FlatList
        data={sandals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  list: {
    alignItems: 'center',
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});
