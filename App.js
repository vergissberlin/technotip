import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, Vibration, View} from 'react-native';

export default function App() {
  const [countUpper, setCountUpper] = useState(50)
  const [countDowner, setCountDowner] = useState(50)
  const winLevel = 10
  const hurryLevel = 23
  const VIBRATION_DURATION = 200

  const _addUpper = () => {
    _hurryUp()
    if (countDowner > winLevel) {
      setCountUpper(countUpper + 1)
      setCountDowner(countDowner - 1)
    }
  }

  const _addDowner = () => {
    _hurryUp()
    if (countUpper > winLevel) {
      setCountUpper(countUpper - 1)
      setCountDowner(countDowner + 1)
    }
  }

  const _hurryUp = () => {
    if (countUpper < hurryLevel || countDowner < hurryLevel) {
      Vibration.vibrate(VIBRATION_DURATION)
    }
  }

  const _restart = () => {
    setCountUpper(50)
    setCountDowner(50)
  }

  if (countUpper === winLevel || countDowner === winLevel) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View activeOpacity={0.52} style={[styles.containerUpper, {flex: countUpper}]}>
          {countUpper <= winLevel ||
            <View style={[styles.counterTextUpper]}>
              <Button
                onPress={_restart}
                title="restart?"
                color="#7FFFD4"
                style={[styles.counterTextUpper, {color: styles.containerDowner.backgroundColor}]}
                accessibilityLabel="Restart the game"
              />
            </View>
          }
          <Text style={[styles.counterText, styles.counterTextUpper, {fontSize: styles.counterText.fontSize - countDowner}]}>{countUpper <= winLevel ? 'you loose :/' : 'you won!'}</Text>
        </View>
        <View activeOpacity={0.52} style={[styles.containerDowner, {flex: countDowner}]}>
          <Text style={[styles.counterText, {fontSize: styles.counterText.fontSize - countUpper}]}>{countDowner <= winLevel ? 'you loose :/' : 'you won!'}</Text>
          {countDowner <= winLevel ||
            <View>
              <Button
                onPress={_restart}
                title="restart?"
                color="#FF4500"
                style={[{color: styles.containerUpper.backgroundColor}]}
                accessibilityLabel="Restart the game"
              />
            </View>
          }
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity activeOpacity={0.52} style={[styles.containerUpper, {flex: countUpper}]} onPress={() => {_addUpper()}}>
        {countUpper < hurryLevel || <Text style={[styles.counter, styles.counterTextUpper, {fontSize: styles.counter.fontSize - countDowner}]}>{countUpper}</Text>}
        <Text style={[styles.counterText, styles.counterTextUpper, {fontSize: styles.counterText.fontSize - countDowner}]}>tap it!{countUpper >= hurryLevel || '!!!'}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.52} style={[styles.containerDowner, {flex: countDowner}]} onPress={() => {_addDowner()}}>
        {countDowner < hurryLevel || <Text style={[styles.counter, {fontSize: styles.counter.fontSize - countUpper}]}>{countDowner}</Text>}
        <Text style={[styles.counterText, {fontSize: styles.counterText.fontSize - countUpper}]}>tap it!{countDowner >= hurryLevel || '!!!'}</Text>
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
