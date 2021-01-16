/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ProductDetails.styles';

function ProductDetails({route}) {
  const {id} = route.params;
  const api_url = 'https://fakestoreapi.com/products/'+id;

  const [productDetail, setProductDetail] = useState({});

  async function fetchProductData() {
    const response = await axios.get(api_url);
    setProductDetail(response.data);
  }

  useEffect(() => {
    fetchProductData();
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: productDetail.image}}
          style={styles.image}>
          <View style={styles.detail}>
            <Text style={styles.title}>{productDetail.title}</Text>
            <Icon name="favorite-outline" size={30}  />
          </View>
        </ImageBackground>
        <Text style={styles.price}>
        {productDetail.price}
        </Text>
        <Text  style={styles.instructions}>
          {productDetail.description}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export {ProductDetails};
