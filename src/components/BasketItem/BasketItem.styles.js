import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    margin: 5,
    marginVertical: 10,
    borderRadius: 10,
    width:'95%',
    flexDirection: 'row',
  },
  image: {
    flex:1
  },
  details: {
    flex:4
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {},
  footer: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    backgroundColor: '#039be5',
    padding: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export {styles};
