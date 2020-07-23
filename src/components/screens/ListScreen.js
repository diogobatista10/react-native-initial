import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Diogo', age: 23 },
        { name: 'Ofelia', age: 22 },
        { name: 'Ines', age: 22 },
        { name: 'Susana', age: 24 },
        { name: 'Paco', age: 23 },
        { name: 'Jarro', age: 23 },
        { name: 'Gonçalo', age: 24 },
        { name: 'Doze', age: 24 },
        { name: 'Ervilha', age: 24 },
        { name: 'Jéssica', age: 19 },
    ];
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => <Text style={styles.text}> {item.name} - {item.age}</Text>}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 5
    }
});

export default ListScreen;