import {StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 0.5,
    width: '50%'
  },
  empty:{
    fontSize: 20,
    alignSelf:'center',
    marginTop:deviceSize.height/2.5
  }
});

export default styles;
