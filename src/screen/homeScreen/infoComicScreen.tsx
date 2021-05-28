import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';


const infoComic = () => {

  return (
    <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.header}>
            <Text style={styles.textHeader}>
            cc
            </Text>
        </View>
        <View style={styles.footer}>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
        header: {
        flex: 2,
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    textHeader: {
        color: 'white',
    },
});

export default infoComic;