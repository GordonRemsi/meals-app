import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>
                The Meals Details Screen!
            </Text>
            <Button
                title="Go Back"
                onPress={() => {props.navigation.popToTop()}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailsScreen;