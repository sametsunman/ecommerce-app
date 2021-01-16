import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#039be5',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center'
  },
  inputContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
});

export {styles};
