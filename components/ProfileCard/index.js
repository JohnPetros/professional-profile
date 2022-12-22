import { useState } from 'react';
import { View, ImageBackground, Image, } from 'react-native';
import Info from '../Info/index';
import InfoDetails from '../InfoDetails/index';

import styles from './style';

export default function ProfileCard() {
  const [infoDetails, setInfoDetails] = useState(false);

  const renderInfoDetails = (...details) => {
    return (
        <InfoDetails details={details} />
    )
  };

  const handleInfoDetails = () => {
    setInfoDetails(!infoDetails)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/profile-bg.png')}>
        <Image
          style={styles.image}
          source={require('../../assets/johnpetros.png')}
        />
       
        <Info handleInfoDetails={handleInfoDetails} />
       {infoDetails && renderInfoDetails("desenvolvedor", "html", "javascript", "css", "php", "react")}
      </ImageBackground>
    </View>
  );
}
