import {StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  basketList: {
    flex: 10,
  },
  totalPrice: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    alignItems:'flex-end',
    alignContent:'space-between'
  },
  totalPriceText: {
    flex: 2,
    fontSize: 20,
    padding: 15
  },
  totalPriceValue: {
    flex: 1,
    fontSize: 25,
    padding: 15
  },
  orderButton: {
    borderRadius: 25,
    flex: 1,
    padding:10
  },
  empty:{
    fontSize: 20,
    alignSelf:'center',
    marginTop:deviceSize.height/3
  }
});

export default styles;
