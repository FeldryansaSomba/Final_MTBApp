import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { IconBack } from '../../../assets/icons';
import { Gap } from '../../atoms';

const Header = ({title, onBack}) => {
    return (
        <View style={styles.container}>
           {onBack && (
               <TouchableOpacity onPress={onBack} activeOpacity={0.5}>
                   <View style={styles.back}>
                     <IconBack/>
                   </View>
               </TouchableOpacity>
           )}
            <Gap width={0}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingVertical: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        fontFamily: 'Offside-Regular',
    },
    back: {
        padding: 10,
    }
});