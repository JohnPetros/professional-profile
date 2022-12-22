import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export default function Contact({icon, text}) {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={20} color="#fff" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
