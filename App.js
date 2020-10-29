import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  
  const _add = () => {
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerUpper}>
        <Text style={styles.counter}>{count}</Text>
      </View>
        <TouchableOpacity activeOpacity={0.52} style={[styles.containerDowner,styles.btnCounter]} onPress={() => {_add()}}>
            <Text style={styles.btnCounterText}>tap it!</Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: '#FF4500',
  },
  containerDowner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: '#7FFFD4',
  },
  counter: {
    color: '#fff',
    fontSize: 144,
    fontWeight: 'bold',
    fontFamily: 'Menlo'
  },
  btnCounter: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCounterText: {
    fontSize: 112,
    fontWeight: 'bold',
    color: '#fff',
  }
});
