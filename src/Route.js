import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductList } from './screens/ProductList';
import { ProductDetails } from './screens/ProductDetails';
import { LikedProducts } from './screens/LikedProducts';
import { BasketList } from './screens/BasketList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useStorage} from './hooks/useStorage';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

function Route() {


const dispatch = useDispatch();
const [storeValue, setStore, removeStore] = useStorage('@storage');

useEffect(() => {

  console.log(storeValue);
  dispatch({type: 'SET_STATE_FROM_STORAGE', payload: storeValue});

}, []);

const storage = useSelector((state) => state);

useEffect(() => {

  console.log(storage);
  setStore(storage);

}, [storage]);



  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Products"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Products') {
                iconName = 'home';
              } else if (route.name === 'Liked') {
                iconName = 'star';
              }
              else if (route.name === 'Basket') {
                iconName = 'shopping-cart';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Products" component={ProductStack} />
          <Tab.Screen name="Liked" component={LikedProducts} />
          <Tab.Screen name="Basket" component={BasketList} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default Route;
