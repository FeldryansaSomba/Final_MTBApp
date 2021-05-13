import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Brake } from '../../assets';
import {Header, TextInput, Gap} from '../../components';

const FixBrake = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Fix Brake" onBack= {() => navigation.goBack()} />
            <View style={styles.contentWrapper}>
            <Brake />
            <Gap height={24} />
            <TextInput title='Langkah 1'/>
            <TextInput title='Mengendurkan baut pengikat "B" hingga kaliper dapat bergerak bebas ke arah samping.'/>
            <TextInput></TextInput>
            <TextInput title='Langkah 2'/>
            <TextInput title='Menyisipkan potongan kertas karton di antara brake pad dan rotor bagian dalam, 
            lalu kencangkan sekerup "D," sambil menjaga agar tidak terlalu kencang agar kertas karton yang 
            disisipkan tadi tidak rusak.'/>
            <TextInput></TextInput>
            <TextInput title='Langkah 3'/>
            <TextInput title='Menarik tuas rem beberapa kali hingga penuh tanpa melepas tarikan pada tuas rem,
            mengencangkan kembali baut pengikat "B" secara bergantian. Maksudnya, tidak langsung satu baut
            (terdapat dua baut pengikat "B") dikencangkan sampai rapat, namun bergantian hingga diperoleh kerapatan
            sesuai rekomendasi buku manual.'/>
            </View>
            
        </View>
    );
};

export default FixBrake;

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