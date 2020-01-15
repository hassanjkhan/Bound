import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput } from 'react-native';

export default class Register extends React.Component {
    render() {
        return (
            <View style={styles.container}> 
                <Image
                    source={require('./clock.png')}
                    style={styles.clock}
                />
                <TextInput 
                    style={styles.textbox1}
                    placeholder='Enter Name:'
                    placeholderTextColor='#000'
                    textAlign='left'
                />
                <TextInput 
                    style={styles.textbox1}
                    placeholder='Enter ID:'
                    placeholderTextColor='#000'
                    textAlign='left'
                />
                <TextInput 
                    style={styles.textbox1}
                    placeholder='Phone Number:'
                    placeholderTextColor='#000'
                    textAlign='left'
                />
                <View style={styles.button}>
                    <Button  
                    title='Create Account'
                    color='#171942'
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                    />
                </View>
                <View style={styles.help}>
                    <Button
                        title='Help!'
                        color='#ED7E09'
                        onPress={() =>
                        this.props.navigation.navigate('Tutorial')
                        }
                    /> 
                </View>
                <View style={styles.login}>
                    <Button
                        title='Login'
                        color='#ED7E09'
                        onPress={() =>
                        this.props.navigation.navigate('Home')
                        }
                    /> 
                </View>
            </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfd9e6',
    },
    title: {
        textAlign: 'center',
        justifyContent:'space-evenly',
        color: '#000',
        fontSize: 35,
        marginTop: 15,
    },
    button: {
        marginLeft: 40,
        marginRight: 40,
        fontSize: 20, 
        borderRadius: 25, 
        borderWidth: 0.6,
        overflow: 'hidden'
      },
      textbox1: {
        height: 45, 
        fontSize: 18, 
        fontWeight: '400',
        color:'black',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 25, 
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        //marginTop: 10,
        textAlignVertical: 'center',
        paddingHorizontal: 15,
      },
      clock: {
        width: 225, 
        height: 225,
        alignSelf: 'center',
        marginBottom: 25,
      },
      help: {
        fontSize: 20, 
        fontWeight: 'bold',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 30
      },
      login: {
        fontSize: 20, 
        fontWeight: 'bold',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        bottom: 30
      }
  });