import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './LikedProducts.styles';

function LikedProducts() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text  style={styles.title}>
          LikedProducts
        </Text>
      </View>
    </SafeAreaView>
  );
}

export {LikedProducts};
