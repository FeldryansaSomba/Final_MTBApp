import React, { useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    }, []);

    return (
        <View style={styles.page}>
            <Logo />
            <Text style={styles.text}>Welcome to</Text>
            <Text style={styles.text}>MTB App</Text>
            <Text></Text>
            <Text style={styles.text1}>Find your solution for your</Text>
            <Text style={styles.text1}>Bikes and take care your</Text>
            <Text style={styles.text1}>Bikes</Text>
        </View>
        
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#0079E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontFamily: 'Slackey-Regular',
    },
    text1: {
        fontSize: 16,
        fontFamily: 'PT Sans-Regular',
    },
});