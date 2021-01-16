import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './SearchBar.styles';

function SearchBar(props) {
  const [searchedValue, setSearchedValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={(val) => setSearchedValue(val)} placeholder="Search Product..." />
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => props.onSearch(searchedValue)}>
        <Icon name="search" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
}

export {SearchBar};
