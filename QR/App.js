import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScanScreen from './components/ScanScreen';
import ScannerOutput from './components/ScannerOutput';
import {Text} from 'react-native-elements';
import FakeProduct from './components/FakeProduct';

const App = () => {
  const [scannedOp, setScannedOp] = useState('');
  return (
    <View style={{flex: 1}}>
      <Text h3 style={styles.header}>
        QR CODE SCANNER
      </Text>
      {scannedOp == "" ? (
        <ScanScreen setScannedOp={setScannedOp} />
      ) : scannedOp !== null ? (
        <ScannerOutput setScannedOp={setScannedOp} scannedOp={scannedOp} />
      ):
      <FakeProduct setScannedOp={setScannedOp} /> 
      }
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    backgroundColor: '#8e44ad',
    color: 'white',
    padding: 20,
  },
  output: {
    textAlign: 'center',
    color: 'red',
  },
});

export default App;
