import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    position: 'relative',
    width: 345,
    height: 420,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 20,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  image: {
    // marginTop: 1000,
    position: 'absolute',
    top: -1170,
    left: -185,
    width: 700,
    resizeMode: 'contain',
  },
});

export default styles;
