import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const INCREMENT = 1;

const reducer = (state, action) => {
    return { ...state, counter: state.counter + action.payload };
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    return (
        <View>
            <Button onPress={() => dispatch({ payload: INCREMENT })}
                title='Increase' />
            <Button onPress={() => dispatch({ payload: -INCREMENT })}
                title='Decrease' />
            <Text style={styles.name}>Count: {state.counter}</Text>
        </View >
    );



};

const styles = StyleSheet.create({
    name: {
        fontSize: 25
    }
});

export default CounterScreen;
