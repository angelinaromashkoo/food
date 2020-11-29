import React, {useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ResultsDetail} from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ResultsShow', {id: item.id});
          }}>
          <ResultsDetail result={item} />
        </TouchableOpacity>
      );
    },
    [results],
  );

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
