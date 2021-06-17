import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import BalancePanel from '../components/BalanceLabel';
import EntrySummary from '../components/EntrySummary';
import EntryList from '../components/EntryList';

export default function Main({navigation}) {
  const currentBalance = '2.064,53';

  const entries = [
    {key: '1', description: 'Alimentação:', amount: '$201'},
    {key: '2', description: 'Combustível:', amount: '$12'},
    {key: '3', description: 'Aluguel:', amount: '$120'},
    {key: '4', description: 'Lazer:', amount: '$250'},
    {key: '5', description: 'Outros:', amount: '$1200'},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        onPress={() => navigation.navigate('NewEntry')}
        title="Adicionar"
      />
      <EntrySummary entries={entries} />
      <EntryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
});
