import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
    const name = props.title ? props.title : 'Default'
    const source = props.imgSource ? props.imgSource : require('../../assets/images/Default.png');
    const score = props.score ? props.score : 0;

    return (
        <View>
            <Image style={styles.img} source={source}></Image>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.score}>{score}</Text>
        </View >
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 25
    },
    score: {
        fontSize: 20
    },
    img: {
        width: 200,
        height: 100
    }
});

export default ImageDetail;
