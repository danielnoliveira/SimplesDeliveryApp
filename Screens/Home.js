import React from 'react';
import { View, StyleSheet} from 'react-native';
import {Header_Home,Research_Home,TagsContainer,FoodsPlates_Home} from '../components';

import AppLoading from 'expo-app-loading';
import {Poppins_400Regular,useFonts} from '@expo-google-fonts/poppins';

import {tagFoods,foods} from '../constants/mocks';

export default function Home(props) {
    const [plates,setPlates] = React.useState(foods);
    const [currentTag,setCurrentTag] =  React.useState('');
    let [fontsLoaded] = useFonts({
        Poppins_400Regular
    });
    if(!fontsLoaded){
        return <AppLoading />
    }
    const gotoTestStackScreen = () => {
		props.navigation.navigate('Restaurant');
	};
    const filterPlatesByTag = (tag='')=>{
        if(tag === '')return;
        if(tag === currentTag){
            const new_plates = foods;
            setPlates(new_plates);
            setCurrentTag('');
        }else{
            const new_plates = foods.filter(item=>item.tag.includes(tag));
            setPlates(new_plates);
            setCurrentTag(tag);
        }
    }
    
    return (
        <View style={styles.container}>
            <Header_Home></Header_Home>
            <Research_Home foods={foods} navigateFunc={gotoTestStackScreen} setCurrentTag={setCurrentTag} setPlates={setPlates}></Research_Home>
            <TagsContainer button tagFoods={tagFoods} currentTag={currentTag} filterPlatesByTag={filterPlatesByTag}></TagsContainer>
            <FoodsPlates_Home plates={plates}></FoodsPlates_Home>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
