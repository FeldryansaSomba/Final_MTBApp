import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Sepeda } from '../../assets';
import {Header, TextInput, Gap} from '../../components';

const Component = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Component" onBack= {() => navigation.goBack()} />
            <View style={styles.contentWrapper}>
            <Sepeda />
            <Gap height={24} />
            <TextInput title='HandleBar'/>
            <TextInput title='Stang sepeda - Berada pada posisi depan sepeda'/>
            <TextInput></TextInput>
            <TextInput title='Headset dan Stem'/>
            <TextInput title='Headset : Tiang penahan bagian stang sepeda
            dari garpu sampai ke frame dan kemudi sepeda. Dibuat dalam 1 set.
            Stem : penghubung tiang garpu depan ke stang sepeda, di jepit dengan
            headset. Stem berfungsi untuk menahan garpu depan sepeda modern agar
            tetap terikat ke rangka frame sepeda.'/>
            <TextInput></TextInput>
            <TextInput title='V - brake'/>
            <TextInput title='Rem konvensional dengan karet, menjepit bagian velg
            (RIM) untuk pengereman'/>
            </View>
            
        </View>
    );
};

export default Component;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 13,
        paddingTop: 9,
        marginTop: 24,
    },

});