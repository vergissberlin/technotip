import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  const [countUpper, setCountUpper] = useState(50)
  const [countDowner, setCountDowner] = useState(50)

  const _addUpper = () => {
    setCountUpper(countUpper + 1)
    setCountDowner(countDowner - 1)
  }

  const _addDowner = () => {
    setCountUpper(countUpper - 1)
    setCountDowner(countDowner + 1)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity activeOpacity={0.52} style={[styles.containerUpper, {flex: countUpper}]} onPress={() => {_addUpper()}}>
        <Text style={[styles.counter, styles.counterTextUpper, {fontSize: styles.counter.fontSize - countDowner}]}>{countUpper}</Text>
        <Text style={[styles.counterText, styles.counterTextUpper, {fontSize: styles.counterText.fontSize - countDowner}]}>tap it!</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.52} style={[styles.containerDowner, {flex: countDowner}]} onPress={() => {_addDowner()}}>
        <Text style={[styles.counter, {fontSize: styles.counter.fontSize - countUpper}]}>{countDowner}</Text>
        <Text style={[styles.counterText, {fontSize: styles.counterText.fontSize - countUpper}]}>tap it!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerUpper: {
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4500',
    width: '100%',
  },
  containerDowner: {
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7FFFD4',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    color: '#fff',
    fontSize: 144,
    fontWeight: 'bold',
    fontFamily: 'Menlo'
  },
  counterText: {
    fontSize: 112,
    fontWeight: 'bold',
    color: '#fff',
  },
  counterTextUpper: {
    transform: [{rotateZ: "180deg"}],
  },
});
