import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import yelp from '../api/yelp';

export const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!result) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return (
            <View style={styles.imageContainer}>
              <FastImage
                style={styles.image}
                source={{
                  uri: item,
                  priority: FastImage.priority.high,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    paddingVertical: 25,
  },
  imageContainer: {
    padding: 15,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
  },
});
