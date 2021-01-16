import React,{useState,useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {ProductItem} from '../../components';
import styles from './LikedProducts.styles';

function LikedProducts() {

  const [favList,setFavList] = useState([]);

  useEffect(() => {

    setFavList(getData());
  
  }, []);

  const getData = async () => {
    try {

      const jsonStorage = await AsyncStorage.getItem('@storage');
      console.log(JSON.parse(jsonStorage));
      return jsonStorage != null ? JSON.parse(jsonStorage).favorites : [];
      
    } catch(e) {
      // error reading value
    }
  }
    
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
