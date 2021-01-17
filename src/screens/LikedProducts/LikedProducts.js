import React,{useState,useEffect} from 'react';
import {useStorage} from './../../hooks/useStorage';
import {SafeAreaView, View, FlatList} from 'react-native';
import {ProductItem} from '../../components';
import styles from './LikedProducts.styles';

function LikedProducts() {

  const [storeValue, setStore, removeStore] = useStorage('@storage');

  useEffect(() => {

    console.log(storeValue);
    if(storeValue && storeValue.favorites.length>0)
      setFavList(storeValue.favorites);
  
  }, [storeValue.favorites]);

    
  const renderProduct = ({item}) => (
    <ProductItem
      product={item}
      onSelect={() => props.navigation.navigate('ProductDetails', {id: item.id})}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={favList}
          renderItem={renderProduct}
          columnWrapperStyle={styles.item}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export {LikedProducts};
