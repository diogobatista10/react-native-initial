import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../ImageDetail";

const ImageScreen = () => {
    const places = ['Beach', 'Forest', 'City', 'Mountain'];

    return (
        <View>
            {places.map((place) => {
                const imgPath = require('../../../assets/images/Default.png');

                console.log(place);
                return <ImageDetail
                    title={place}
                    imgSource={imgPath}
                    score={Math.random()}
                />
            })}
        </View >
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ImageScreen;
