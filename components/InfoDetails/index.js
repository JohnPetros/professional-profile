import { View, Text } from 'react-native';
import Buttons from '../Buttons/index';
import styles from './style';

export default function InfoDetails({ details }) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        {details.map((detail) => (
          <View style={[styles.detail, styles[detail]]}>
            <Text>{detail}</Text>
          </View>
        ))}
      </View>
      <Buttons />
    </View>
  );
}
