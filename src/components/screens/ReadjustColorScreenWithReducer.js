import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {

    switch (action.type) {
        case 'red':
            return { ...state, red: validateColor(state.red, action.payload) }
        case 'green':
            return { ...state, green: validateColor(state.green, action.payload) };
        case 'blue':
            return { ...state, blue: validateColor(state.blue, action.payload) };
        default:
            return;
    }
}

const validateColor = (value, action) => {
    if (value + action > 0 && value + action < 255) {
        return value + action;
    }
    return value;
}

const ReadjustColorScreenWithReducer = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const [state, dispatch] = useReducer(reducer, { red, green, blue });

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'red', payload: -COLOR_INCREMENT })}
                colorName='Red'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'green', payload: -COLOR_INCREMENT })}
                colorName='Green'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'blue', payload: -COLOR_INCREMENT })}
                colorName='Blue'
            />

            <View style={{
                alignSelf: "center",
                backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
                height: 100,
                marginTop: 10,
                width: 100
            }} />
            <Text style={styles.text}>COLOR CODE: {`rgb(${state.red},${state.green},${state.blue})`}</Text>
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

export default ReadjustColorScreenWithReducer;
