import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Gap, Header } from '../../components';

const Home = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Home" />

            <View style={styles.contentWrapper}>
            <Button title="Component" 
            onPress={() => navigation.navigate('Component')} />
            <Gap height={51} />
            <Button title="Repair"
            onPress={() => navigation.navigate('Repair')} />
            <Gap height={51} />
            </View>
        </View>
    );
};

export default Home;

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

    },
});