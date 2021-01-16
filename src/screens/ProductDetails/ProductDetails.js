import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFetch} from '../../hooks/useFetch';
import {useDispatch} from 'react-redux';
import styles from './ProductDetails.styles';

function ProductDetails({route}) {
  const {id} = route.params;
  const api_url = 'https://fakestoreapi.com/products/'+id;

  const {data, loading, error} = useFetch(api_url, {});

  const dispatch = useDispatch();

  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    setProductDetail(data);
  }, [data]);

  

    // if (loading) {
    //   return <Loading />;
    // }
  
    // if (error) {
    //   return <Error />;
    // }

  const onLike = () => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: productDetail});
  }

  return (
    <SafeAreaView style={styles.container}>
      {productDetail && <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: productDetail.image}}
          style={styles.image}>
          <View style={styles.detail}>
            <Text style={styles.title}>{productDetail.title}</Text>
            <Icon style={styles.like} name="favorite-outline" size={30} onPress={onLike} />
          </View>
        </ImageBackground>
        <Text style={styles.price}>
        {productDetail.price}
        </Text>
        <Text  style={styles.instructions}>
          {productDetail.description}
        </Text>
      </View>}
    </SafeAreaView>
  );
}

export {ProductDetails};
