import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const Repair = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Repair" onBack= {() => navigation.goBack()} />
            <View style={styles.contentWrapper}>
            <Gap height={43} />
            <TextInput title='Memperbaiki Rem Cakram'/>
            <Gap height={10} />
            <Button title='Go to Tutorial' 
            onPress={() => navigation.navigate('FixBrake')} />
            <Gap height={90} />
            <TextInput title='Memperbaiki HandleBar'/>
            <Gap height={10} />
            <Button title='Go to Tutorial' />
            <Gap height={90} />
            <TextInput title='Memperbaiki Rear Derailleur'/>
            <Gap height={10} />
            <Button title='Go to Tutorial' />
            
            </View>
            
        </View>
    );
};

export default Repair;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 9,
        marginTop: 24,
        alignItems: 'center',
    },

});