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

  const storage = useSelector((state) => state);

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
    if(storage && storage.favorites.find(x=>x.id===productDetail.id))
    {
      dispatch({type: 'REMOVE_FROM_FAVORITES', payload: productDetail});
      alert("Removed from favorites!");
    }
    else{
      dispatch({type: 'ADD_TO_FAVORITES', payload: productDetail});
      alert("Added to favorites!");
    }
    
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
            <Icon style={styles.like} name={storage && storage.favorites.find(x=>x.id===productDetail.id) ? "favorite" : "favorite-outline"} size={30} onPress={onLike} />
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
