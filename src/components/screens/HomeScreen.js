import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>React Native Learn Lessons</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title='Go To Exercise 1 (Components Screen)'
      />
      <Button
        onPress={() => props.navigation.navigate('List')}
        title='Go To Exercise 2 (List Screen)'
      />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title='Go To Exercise 3 (Image Screen)'
      />
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title='Go To Exercise 4 (Counter Screen)'
      />
      <Button
        onPress={() => props.navigation.navigate('Color')}
        title='Go To Exercise 5 (Color Screen)'
      />
      <Button
        onPress={() => props.navigation.navigate('ReadjustColor')}
        title='Go To Exercise 6 (Readjust Color Screen)'
      />
      <Button
        onPress={() => props.navigation.navigate('ReadjustColorV2')}
        title='Go To Exercise 7 (Readjust Color Screen With Reducer)'
      />
      <Button
        onPress={() => props.navigation.navigate('CounterV2')}
        title='Go To Exercise 8 (Counter Screen With Reducer)'
      />
      <Button
        onPress={() => props.navigation.navigate('Text')}
        title='Go To Exercise 9 (Text Screen)'
      />
    </View >
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
