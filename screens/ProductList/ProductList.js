import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styles from './ProductList.styles';
import {SafeAreaView, View, FlatList} from 'react-native';
import {SearchBar, ProductItem} from '../../components';

function ProductList(props) {

    const api_url = 'https://fakestoreapi.com/products';

    const [productList, setProductList] = useState([]);

    useEffect(() => {
      fetchProductData();
    }, []);

    function fetchProductData() {
      axios
        .get(api_url)
        .then((response) => {
          setProductList(response.data)
        });
    }

    function searchProduct(searchedField) {

      axios.get(api_url)
        .then((response) => {
          setProductList(response.data.products.filter(x=> {
            x.strProduct.toLowerCase()
            .includes(searchedField.toLowerCase())
          }));
        });

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
        <SearchBar onSearch={searchProduct} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={productList}
          renderItem={renderProduct}
          columnWrapperStyle={styles.item}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export {ProductList};
