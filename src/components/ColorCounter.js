import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = (props) => {
    const { colorName, onDecrease, onIncrease } = props;

    return (
        <View>
            <Text style={styles.text}>{colorName}</Text>
            <Button
                title={`More ${colorName}`}
                onPress={onIncrease}
            />
            <Button
                title={`Less ${colorName}`}
                onPress={onDecrease}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        alignSelf: "center",
        fontSize: 25
    }
});

export default ColorCounter;
