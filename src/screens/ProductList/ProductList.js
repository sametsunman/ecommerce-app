import React, {useEffect, useState} from 'react';
import {Loading, Error} from '../../components';
import styles from './ProductList.styles';
import {SafeAreaView, View, FlatList} from 'react-native';
import {SearchBar, ProductItem} from '../../components';
import {useFetch} from '../../hooks/useFetch';

function ProductList(props) {

    const api_url = 'https://fakestoreapi.com/products';

    const {data, loading, error} = useFetch(api_url, {});

    const [productList, setProductList] = useState([]);

    useEffect(() => {
      setProductList(data);
    }, [data]);

    if (loading) {
      return <Loading />;
    }
  
    if (error) {
      return <Error />;
    }

    function searchProduct(searchedField) {

          setProductList(productList.filter(x=> {
            x.title.toLowerCase()
            .includes(searchedField.toLowerCase())
          }));

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
