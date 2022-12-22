import { View } from 'react-native';

import styles from './style'

export default function Container({ children }) {
      // <Image style={styles.image} source={require("../../assets/johnpetros.png")} />
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
