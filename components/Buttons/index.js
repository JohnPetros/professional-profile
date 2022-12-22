import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Buttons() {
  const renderButton = (...buttons) => {
    return buttons.map((button) => (
      <TouchableOpacity
        style={[
          styles.button,
          button === 'Contratar' ? styles.buttonHire : styles.buttonDefault,
        ]}>
        <Text style={button === 'Contratar' && styles.buttonHireText}>
          {button}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {renderButton('Enviar Mensagem', 'Contratar')}
    </View>
  );
}
