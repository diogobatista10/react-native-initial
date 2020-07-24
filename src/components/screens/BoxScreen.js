import React from "react";
import { StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.view1} />
            <View style={styles.view2} />
            <View style={styles.view3} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        height: 500,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view1: {
        backgroundColor: 'red',
        height: 120,
        width: 120,
    },
    view2: {
        backgroundColor: 'blue',
        height: 120,
        width: 120,
        top: 130,
    },
    view3: {
        backgroundColor: 'green',
        height: 120,
        width: 120,
    }
});

export default BoxScreen;
