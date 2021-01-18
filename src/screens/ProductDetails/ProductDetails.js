import React, {useEffect, useState} from 'react';
import {useStorage} from './../../hooks/useStorage';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFetch} from '../../hooks/useFetch';
import {useDispatch,useSelector} from 'react-redux';
import styles from './ProductDetails.styles';

function ProductDetails({route}) {
  const {id} = route.params;
  const api_url = 'https://fakestoreapi.com/products/'+id;

  const {data, loading, error} = useFetch(api_url, {});

  const dispatch = useDispatch();

  const {favorites,orderBasket} = useSelector((state) => state);

  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    setProductDetail(data);
  }, [data]);

  

    if (loading) {
      return <Loading />;
    }
  
    if (error) {
      return <Error />;
    }

  const onLike = () => {
    if(favorites.find(x=>x.id===productDetail.id))
    {
      dispatch({type: 'REMOVE_FROM_FAVORITES', payload: productDetail});
      alert("Removed from favorites!");
    }
    else{
      dispatch({type: 'ADD_TO_FAVORITES', payload: productDetail});
      alert("Added to favorites!");
    }
    
  }

  const onBasket = () => {
    if(orderBasket.find(x=>x.id===productDetail.id))
    {
      dispatch({type: 'REMOVE_FROM_BASKET', payload: productDetail});
      alert("Removed from basket!");
    }
    else{
      dispatch({type: 'ADD_TO_BASKET', payload: productDetail});
      alert("Added to basket!");
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      {productDetail && <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: productDetail.image}}
          style={styles.image}>
        </ImageBackground>
        <View style={styles.detail}>
            <Text style={styles.title}>{productDetail.title}</Text>
            <Icon style={styles.like} name={favorites.find(x=>x.id===productDetail.id) ? "favorite" : "favorite-outline"} size={30} onPress={onLike} />
          </View>
        <Text style={styles.price}>
        ${productDetail.price}
        </Text>
        <Text  style={styles.instructions}>
          {productDetail.description}
        </Text>
        <View style={styles.basket}>
        <Icon name={orderBasket.find(x=>x.id===productDetail.id) ?"check":"shopping-cart"} size={30} onPress={onBasket} />
        </View>
      </View>}
    </SafeAreaView>
  );
}

export {ProductDetails};
