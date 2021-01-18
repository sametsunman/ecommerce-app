import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './BasketItem.styles';

const BasketItem = ({product, onSelect, deleteProduct}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: product.image}}
        style={styles.image}
      />
        <View style={styles.nameView}>
          <Text style={styles.name}>{product.title}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <Icon style={styles.remove} name="close" size={15} onPress={()=>deleteProduct()} />
    </View>
    </TouchableOpacity>
  );
};

export {BasketItem};
