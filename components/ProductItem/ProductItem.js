import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './ProductItem.styles';

const ProductItem = ({product, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
      <Image
        resizeMode="contain"
        source={{uri: product.image}}
        style={styles.logo}
      />
      <View style={styles.footer}>
        <View style={styles.details}>
          <Text style={styles.name}>{product.title}</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export {ProductItem};
