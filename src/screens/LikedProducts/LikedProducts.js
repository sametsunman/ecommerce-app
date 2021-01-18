import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View, FlatList} from 'react-native';
import {ProductItem} from '../../components';
import styles from './LikedProducts.styles';

function LikedProducts() {

  const [favList,setFavList] = useState([]);

  const {favorites} = useSelector((state) => state);

  useEffect(() => {
      setFavList(favorites);
  }, [favorites]);

    
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
