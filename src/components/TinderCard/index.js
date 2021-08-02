import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';

const Card = props => {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardinner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  pagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },

  cardinner: {
    padding: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'normal',
  },
});
