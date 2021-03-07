import React from 'react'
import { TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function IconButton({ name, color, size, cb }) {
    return (

        <TouchableOpacity onPress={cb}>
            <Ionicons name={name} size={size} color={color} style={styles.IconButton} />
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    IconButton:{
        padding:8,
        backgroundColor:'white',
        borderRadius:10,
    },
});