import React from 'react'
import { View, Text , StyleSheet,Image} from 'react-native'
import profile_image from '../assets/images/avatar_image.png';
export default function Header_Home() {
    return (
        <View style={styles.header}>
            <Text style={styles.welcomeText}>
                Welcome back,{"\n"}Alisha
                </Text>
            <Image source={profile_image} style={styles.profileImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:70,
        marginBottom:24,
        marginTop:85,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    welcomeText:{ 
        fontSize: 24, 
        fontWeight: '600', 
        lineHeight: 37, 
        fontFamily: 'Poppins_400Regular' 
    },
    profileImage:{
        borderRadius:50,
    }
});