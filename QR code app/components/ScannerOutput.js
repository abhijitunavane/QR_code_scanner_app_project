import React, {Component} from 'react';
import {Text, Button, Icon} from 'react-native-elements';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

class ScannerOutput extends Component {
  render() {
    return (
      <Card containerStyle={styles.scannerOutputCard} wrapperStyle={{}}>
        <Card.Title h3>
          QR CODE DETAILS
        </Card.Title>
        <Card.Divider />
        <View style={styles.scannerOutputView}>
          
          <Text style={styles.ouputText}>{this.props.scannedOp}</Text>
          <Button
            icon={
              <Icon type="font-awesome" name="qrcode" size={20} color="white" />
            }
            title="Scan QR Code Again"
            titleStyle={{marginHorizontal: 5}}
            onPress={() => this.props.setScannedOp(null)}
            buttonStyle={styles.btn}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  ouputText: {
    borderWidth: 1,
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "sans",
    padding: 20,
    borderColor: "#ccc"
  },
  scannerOutputCard: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  btn: {    
    padding: 12,
    backgroundColor: "#9b59b6",    
  },
  scannerOutputView: {
      padding: 20,      
  }
});

export default ScannerOutput;
