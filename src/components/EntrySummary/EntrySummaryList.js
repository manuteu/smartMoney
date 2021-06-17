import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function EntrySummaryList({entries}) {
  return (
    <View style={styles.container}>
      <Text style={styles.list}>Categorias</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            - {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  list: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
