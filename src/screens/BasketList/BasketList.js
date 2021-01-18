import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View, FlatList, Text, Button} from 'react-native';
import {BasketItem} from '../../components';
import {useDispatch} from 'react-redux';
import styles from './BasketList.styles';

function BasketList() {

  const [basketList,setBasketList] = useState([]);

  const dispatch = useDispatch();

  const {orderBasket} = useSelector((state) => state);

  useEffect(() => {
    setBasketList(orderBasket);
  }, [orderBasket]);

  const deleteProduct = (product) =>{
    dispatch({type: 'REMOVE_FROM_BASKET', payload: product});
  }

  const orderNow = () =>{
    if(basketList.length>0)
    {
      dispatch({type: 'ORDER_NOW', payload: basketList});
      alert("Ordered succesfully!!")
    }
    
  }
    
  const renderProduct = ({item}) => (
    <BasketItem
      product={item}
      onSelect={() => props.navigation.navigate('ProductDetails', {id: item.id})}
      deleteProduct={()=>deleteProduct(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.basketList}>
        <FlatList
          ListEmptyComponent={<Text style={styles.empty}>Order basket is empty :(</Text>}
          keyExtractor={(item) => item.id}
          data={basketList}
          renderItem={renderProduct}
          columnWrapperStyle={styles.item}
        />
      </View>
      <View style={styles.totalPrice}>
      <Text style={styles.totalPriceText}>Total Price: </Text>
    <Text style={styles.totalPriceValue}>${basketList.reduce(function(prev, cur) {return prev + cur.price;}, 0)}</Text>
      </View>
      <View style={styles.orderButton}>
        <Button onPress={()=>orderNow()} title="Order Now" />
      </View>
    </SafeAreaView>
  );
}

export {BasketList};
