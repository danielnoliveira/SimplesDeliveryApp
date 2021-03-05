import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HeartButton() {
    const [heart, setheart] = useState(false);
    return (
        <TouchableOpacity style={styles.favoriteButton} onPress={() => setheart(!heart)}>
            <AntDesign name="heart" size={28} color={heart?"#F94848":"white"} />
        </TouchableOpacity>
    );
}

export default function FoodsPlates_Home({ plates }) {
    return (
        <View style={styles.foodsSalesContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {plates.map((item, index) => {
                    return (
                        <View key={index} style={styles.foodItem}>
                            <View style={styles.rectFoodItem}>
                                <Image source={item.image} style={styles.plateImage} />
                                <View>
                                    <Text style={styles.plateName}>{item.name}</Text>
                                    <View style={styles.containerPriceAndHeart}>
                                        <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
                                        <HeartButton />
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    foodsSalesContainer: {
        width: '100%',
        height: hp('55%'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    foodItem: {
        width: 251,
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectFoodItem: {
        width: 232.47,
        height: 243.88,
        borderRadius: 8,
        backgroundColor: "#FEFEFE",
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 20.76,
        // borderWidth:1,
        marginTop: 10
    },
    favoriteButton: {
        width: 48,
        height: 48,
        backgroundColor: '#36C07E',
        borderRadius: 6,
        marginHorizontal: 12,
        padding: 8,
        padding: 10,
        marginHorizontal: 0
    },
    plateImage: {
        width: 170,
        height: 170,
        position: 'absolute',
        top: '-20%',
        left: 32,

    },
    plateName: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        marginBottom: 15.27
    },
    containerPriceAndHeart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        color: "#FF754F",
        lineHeight: 22,
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'Poppins_400Regular',
    }
});