import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
  },

  input: {
    top: 3,
    bottom: 8,
    padding: 0,
    margin: 0,
    height: 50,
    flex: 1
  },

  row: {
    flexDirection: 'row',
    flex: 1
  },

  flex: {
    flex: 1,
  },

  accessory: {
    top: 2,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});
