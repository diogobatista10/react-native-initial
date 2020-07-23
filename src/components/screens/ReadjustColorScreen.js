import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../ColorCounter";

const COLOR_INCREMENT = 10;

const ReadjustColorScreen = () => {
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                if (red + change < 255 && red - change > 0) {
                    setRed(red + change);
                }
                return;
            case 'green':
                if (green + change < 255 && green - change > 0) {
                    setGreen(green + change);
                }
                return;
            case 'blue':
                if (blue + change < 255 && blue - change > 0) {
                    setBlue(blue + change);
                }
                return;
            default:
                return;
        }
    };

    const [red, setRed] = useState(Math.floor(Math.random() * 256));
    const [green, setGreen] = useState(Math.floor(Math.random() * 256));
    const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

    return (
        <View>
            <ColorCounter
                onIncrease={() => {
                    setColor('red', COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor('red', -COLOR_INCREMENT);
                }}
                colorName='Red'
            />
            <ColorCounter
                onIncrease={() => {
                    setColor('green', COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor('green', -COLOR_INCREMENT);
                }}
                colorName='Green'
            />
            <ColorCounter
                onIncrease={() => {
                    setColor('blue', COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor('blue', -COLOR_INCREMENT);
                }}
                colorName='Blue'
            />

            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red},${green},${blue})`
            }} />
            <Text style={styles.text}>COLOR CODE: {`rgb(${red},${green},${blue})`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        marginTop: 10,
        textAlign: "center",
    },
});

export default ReadjustColorScreen;
