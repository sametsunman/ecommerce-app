import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './BasketItem.styles';

const BasketItem = ({product, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: product.image}}
        style={styles.image}
      />
        <View style={styles.details}>
          <Text style={styles.name}>{product.title}</Text>
        </View>
    </View>
    </TouchableOpacity>
  );
};

export {BasketItem};
