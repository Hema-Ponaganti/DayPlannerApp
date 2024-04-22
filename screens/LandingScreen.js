import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image's size to cover the entire container
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'cornflowerblue',
    padding: 10,
    borderRadius: 5,
  },
});

export default LandingScreen;
