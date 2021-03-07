import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const { tagFoods, restaurant } = require('./../constants/mocks');
import TagsContainer from './TagsContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RestaurantInfo() {
    return (
        <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>
                {restaurant.name}
            </Text>
            <TagsContainer tagFoods={tagFoods.filter(tag => restaurant.tags.includes(tag.name))}></TagsContainer>
            <View style={styles.restaurantInfoSecond}>
                <View style={styles.restaurantInfoClassification}>
                    <Ionicons name="star" color="#44BB6B" size={8} />
                    <Text style={styles.text}> {restaurant.avaliation}</Text>
                </View>
                <Text>*</Text>
                <Text style={styles.text}>{restaurant.distance} Km</Text>
                <Text>*</Text>
                <Text style={[styles.text, { fontWeight: 'bold', fontSize: 20 }]}>{Array(restaurant.deliveryTax).fill('$').join('')}</Text>
            </View>
            <Text style={styles.description}>
                {restaurant.description}
            </Text>
            <View style={styles.adress}>
                <Text style={styles.adressHone}>Adress</Text>
                <Text style={styles.adressText}>{restaurant.adress}</Text>
                <Text style={styles.adressExtras}>More details</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    restaurantInfo: {
        width: '88%',
        marginLeft: '6%',
        marginRight: '6%',
        margin: 30,
        marginHorizontal: 24,
    },
    restaurantName: {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: "600",
        fontFamily: 'Poppins_400Regular',
        marginBottom: 15,
        paddingLeft: 15
    },
    restaurantInfoSecond: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 15
    },
    restaurantInfoClassification: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 22,
        color: '#1D262A'
    },
    description: {
        lineHeight: 20,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        marginLeft: 15,
        marginTop: 24,
        color: '#1D262A',
        opacity: 0.7
    },
    adress: {
        marginLeft: 15,
        marginTop: 23
    },
    adressHone: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        color: '#1D262A',
    },
    adressText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 18,
        fontWeight: 'normal',
        color: '#1D262A',
        opacity: 0.8,
        marginTop: 8
    },
    adressExtras: {
        marginTop: 8,
        fontWeight: 'bold',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 18,
        color: '#36C07E',
        letterSpacing: 0.5
    },
});