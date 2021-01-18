import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      height: deviceSize.height / 3,
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
      justifyContent: 'flex-end',
    },
    title: {
      flex:8,
      fontWeight: 'bold',
      fontSize: 30,
    },
    like: {
      flex: 1
    },
    price: {
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 5
    },
    instructions:{
      margin:5
    },
    detail: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
      backgroundColor: '#cececeaa'
    },
    basket:{
      position:"absolute",
      right:20,
      bottom:20,
      borderWidth: 2,
      borderColor: "#000000",
      borderRadius: 50,
      padding: 10
    }
  });

  export default styles;
