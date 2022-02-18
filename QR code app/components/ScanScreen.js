import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ToastAndroid, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Icon} from 'react-native-elements';
import _private from '../key/private.js';

import JSEncrypt from 'jsencrypt';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torch: false,
      output: 'Results Will Be Shown Here',
    };
    this.turnOnTorch = this.turnOnTorch.bind(this);
  }
  onSuccess = e => {
    var _decrypt = new JSEncrypt();
    _decrypt.setPrivateKey(_private);
    var uncrypted = _decrypt.decrypt(e.data);

    var output = uncrypted;    
    this.setState({
      output,
    });
    this.props.setScannedOp(output);
  };
  turnOnTorch = () => {
    this.setState({
      torch: !this.state.torch,
    });
  };
  render() {
    return (
      <QRCodeScanner
        fadeIn={true}
        showMarker={true}
        ref={e => {
          this.scanner = e;
        }}
        onRead={this.onSuccess}
        flashMode={
          this.state.torch
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        topContent={
          <View style={styles.topContent}>
            <Button
              containerStyle={{}}
              icon={
                <Icon
                  type="font-awesome"
                  name="flash"
                  size={20}
                  color="black"
                />
              }
              type="clear"
              onPress={this.turnOnTorch}
            />
          </View>
        }
        bottomContent={<Text></Text>}
        reactivate={false}
        containerStyle={styles.containerStyle}
        cameraStyle={styles.cameraStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  topContent: {},
  containerStyle: {
    margin: 10,
  },
  cameraStyle: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);

export default ScanScreen;
