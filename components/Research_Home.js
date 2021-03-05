import React from 'react';
import { View, StyleSheet,TextInput,Image,Keyboard } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import FilterIcon from '../assets/icons/funnel_sticks_filter_icon.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default function Research_Home({foods,setCurrentTag,setPlates,navigateFunc}) {
    const [value, onChangeText] = React.useState('');
    return (
        <View style={styles.researchContainer}>
            <View style={styles.searchContainer}>
                <EvilIcons name="search" size={25} color="rgba(191, 209, 219, 0.6)" style={styles.iconSearch} />

                <TextInput
                    onBlur={() => Keyboard.dismiss()}
                    onChangeText={text => {
                        onChangeText(text);
                        const new_plates = foods.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
                        setCurrentTag('');
                        setPlates(new_plates);
                    }}
                    value={value}
                    placeholderTextColor="rgba(191, 209, 219, 0.6)"
                    placeholder="Tasty food"
                    style={{ width: '75%',fontFamily: 'Poppins_400Regular' }}
                />
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={() => navigateFunc()}>
                <Image source={FilterIcon} style={styles.filterButtonImage} tintColor="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    researchContainer:{
        width:'100%',
        height:48,
        marginBottom:16,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:24
    },
    iconSearch:{
        marginHorizontal: 13,
    },
    searchContainer:{
        height:'100%',
        width:'80%',
        borderWidth:1.5,
        borderRadius:8,
        borderColor:'rgba(191, 209, 219, 0.6)',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    filterButton:{
        width:48,
        height:48,
        backgroundColor:'#36C07E',
        borderRadius:6,
        marginHorizontal:12,
        padding:8,
    },
    filterButtonImage: {
        width: 32, 
        height: 32, 
    }
});