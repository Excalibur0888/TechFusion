import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { gStyle } from '../../styles/style';
import Header from '../Header/Header';

const Favourite = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View style={gStyle.main}>
			<Header/>
      <ScrollView>
        {favorites.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.caption}>{item.caption}</Text>
						<Text style={styles.caption}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
		color: 'white'
  },
});

export default Favourite;
