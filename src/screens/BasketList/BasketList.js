import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View, FlatList} from 'react-native';
import {BasketItem} from '../../components';
import styles from './BasketList.styles';

function BasketList() {

  const [basketList,setBasketList] = useState([]);

  const {orderBasket} = useSelector((state) => state);

  useEffect(() => {
    setBasketList(orderBasket);
  }, [orderBasket]);

    
  const renderProduct = ({item}) => (
    <BasketItem
      product={item}
      onSelect={() => props.navigation.navigate('ProductDetails', {id: item.id})}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={basketList}
          renderItem={renderProduct}
          columnWrapperStyle={styles.item}
        />
      </View>
    </SafeAreaView>
  );
}

export {BasketList};
