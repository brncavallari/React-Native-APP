import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor:'#5866ac',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 8,
    color: '#222',
    fontSize: 20,
    borderRadius: 20,
    padding: 10,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#1d1e6a',
    marginTop: 5
  },

  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});

export default styles;