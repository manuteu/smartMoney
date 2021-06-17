import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary({entries}) {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entries={entries} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
});
