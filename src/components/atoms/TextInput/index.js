import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextInput = ({title}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontFamily: 'Offside-Regular',
    },
});