import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Contact from '../Contact/index';
import styles from './style';

export default function Info({ handleInfoDetails }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>John Doe</Text>
        <Contact icon="envelope" text="johndoe@gmail.com" />
        <Contact icon="phone" text="(12) 98881-5499" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleInfoDetails()}>
        <Icon name="expand" size={22} color='#1F3175'/>
      </TouchableOpacity>
      <View>
      </View>
    </View>
  );
}
