/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component}  from 'react';
import TouchID from 'react-native-touch-id';
import {
  View, StyleSheet, ScrollView, 
  Image, Button, NativeModules, Dimensions
  
} from 'react-native';

var ImagePicker = NativeModules.ImageCropPicker; 
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width - 10;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      image: null, 
      images: null, 
      biometryType: null 
    };
  }

  renderImage(image) {
    return <Image style={{marginTop: 200, marginBottom: 50,
       marginHorizontal: 20, width: imageWidth, height: 300, resizeMode: 'cover'}} 
       source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }
    return this.renderImage(image);
  }
  
  onClick() {
    TouchID.isSupported()
    .then(authenticate)
    .then(ApprovedValue => {
      if(ApprovedValue == 1){
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
        }).then(images => {
          this.setState({
              image: null,
              images: images.map(i => {
                console.log('received image', i);
                return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
              })
            });
          }).catch(e => {
            if(e != "Error: User cancelled image selection")
              alert(e)
          });
      }
    }).catch(error => {
      alert(error);
    });
  }

  componentDidMount() {
    TouchID.isSupported()
    .then(biometryType => {
      this.setState({ biometryType });
    })
  }

  render() {
    
    const Select = () => {
      return <Button style={styles.Button} color="white" title = "Select Images" onPress={this.onClick.bind(this)}/>
    };
   return (
    <View style={styles.container}>
      
      <ScrollView onScroll={this.handleScroll} horizontal={true} disableIntervalMomentum={true}>
        {this.state.image ? this.renderAsset(this.state.image) : null}
        {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
      
      <View style={styles.Button}>
        <Select/>
      </View> 

    </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  Button: {   
    alignItems: 'center',
    bottom: '20%',
    backgroundColor: 'rgb(0, 0, 140)',   
    borderRadius: 18,
  },
  
});

function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      return 1;
    })
    .catch(error => {
      //User does not have Face or Touch ID to use 
      if(error.name == "LAErrorTouchIDNotEnrolled"){
        return 1;
      }
      return 0
    });
 }