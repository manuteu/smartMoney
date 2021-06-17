import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import BalanceLabel from '../components/BalanceLabel';
import {saveEntry} from '../services/Entries';

function AddGps() {}
function AddCamera() {}
// function Add() {}

export default function NewEntry({navigation}) {
  const currentBalance = 2054.63;
  const [amount, setAmount] = useState('0.00');

  const save = () => {
    const value = {
      amount: parseFloat(amount),
    };

    console.log('NewEntry :: save ', value);
    saveEntry(value);
  };
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.inputs}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.inputs} />

        <Button onPress={AddGps} title="GPS" />
        <Button onPress={AddCamera} title="Camera" />
      </View>
      <View>
        <Button onPress={save} title="Adicionar" />
        <Button onPress={() => navigation.goBack()} title="Cancelar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
    padding: 10,
  },
  inputs: {
    borderColor: '#000',
    borderWidth: 1,
  },
});
