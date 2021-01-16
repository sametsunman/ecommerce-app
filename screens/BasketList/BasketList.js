import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './BasketList.styles';

function BasketList() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text  style={styles.title}>
          BasketList
        </Text>
      </View>
    </SafeAreaView>
  );
}

export {BasketList};