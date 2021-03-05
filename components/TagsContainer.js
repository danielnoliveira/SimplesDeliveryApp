import React from 'react'
import { View, Text, ScrollView,StyleSheet,Image} from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler';
export default function TagsContainer({tagFoods,filterPlatesByTag,currentTag,button}) {
    return (
        <View style={styles.tagFoodContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {tagFoods.map((tag, index) => {
                    if(!button){
                        return (
                            <View key={index} style={[styles.itemTagFood, { backgroundColor:tag.color,borderColor:tag.color}]}>
                                <Image source={tag.image} style={{ width: 24, height: 24 }} />
                                <Text style={styles.tagName} >{tag.name}</Text>
                            </View>
                        );
                    }else{
                        return (
                            <TouchableOpacity key={index} onPress={() => filterPlatesByTag(tag.name)} style={[styles.itemTagFood, { backgroundColor: currentTag===tag.name?tag.color:'white',borderColor:tag.color}]}>
                                <Image source={tag.image} style={{ width: 24, height: 24 }} />
                                <Text style={styles.tagName} >{tag.name}</Text>
                            </TouchableOpacity>
                        );
                    }
                })}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    tagFoodContainer:{
        width:'100%',
        height:50,
        marginBottom:1
    },
    itemTagFood:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'green',
        marginHorizontal:12,
        paddingHorizontal:18,
        paddingVertical:12,
        borderRadius:10,
        borderColor:'#cdcdcd',
        borderWidth:1
    },
    tagName:{ 
        lineHeight: 20, 
        fontSize: 16, 
        fontWeight: '400', 
        marginLeft: 10, 
        fontFamily: 'Poppins_400Regular'
    }
});