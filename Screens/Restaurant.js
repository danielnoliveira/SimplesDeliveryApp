import React,{useState,useRef} from 'react'
import { View, Text, StyleSheet,Dimensions,Image,Animated,ScrollView } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView,{Marker} from 'react-native-maps';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {TagsContainer,FoodsPlates_Home} from './../components';
const {tagFoods,restaurant} = require('./../constants/mocks');

const {latitude,longitude} = restaurant.coordenates;

const IconButton = ({name,color,size,cb})=>(
    <TouchableOpacity onPress={cb}>
        <Ionicons name={name} size={size} color={color} style={styles.IconButton} />
    </TouchableOpacity>
); 

export default function Restaurant({navigation}) {
    
    const [open,IsOpen] = useState(false);
    const top = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    
    const handleGesture = (evt) =>{
        let {nativeEvent} = evt;
        if(open && nativeEvent.y<200){
            if(nativeEvent.velocityY>0){
                IsOpen(!open);
                Animated.parallel(
                    [

                        Animated.timing(top,{
                            toValue:0,
                            duration:1000,
                            useNativeDriver:false
                        }),

                        Animated.timing(opacity,{
                            toValue:1,
                            duration:1000,
                            useNativeDriver:false
                        })
                    ]
                ).start();
            }
        }else if(!open && nativeEvent.y<200){
            if(nativeEvent.velocityY<0){
                IsOpen(!open);
                Animated.parallel([
                    Animated.timing(top,{
                        toValue:-Dimensions.get('window').height*0.45,
                        duration:1000,
                        useNativeDriver:false
                    }),

                    Animated.timing(opacity,{
                        toValue:0.5,
                        duration:1500,
                        useNativeDriver:false
                    })
                ]).start();
            }
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <IconButton name="chevron-back" size={32} color="#1D262A" cb={()=>navigation.navigate('Tabs')}/>
                <IconButton name="heart-outline" size={32} color="#1D262A"  />
            </View>
            <Animated.View style={{opacity:opacity}}>
                <MapView
                    initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                    }}
                    style={styles.map}
                >
                    <Marker coordinate={{longitude,latitude}} title="Brokklyn Pizza" description="Brokklyn Pizza">
                        <Image source={require('./../assets/images/Union.png')}/>
                        <MaterialIcons name="silverware-fork-knife" size={20} color="white" style={{top:-43,left:8}}/>
                    </Marker>
                </MapView>
            </Animated.View>
            <Animated.View  style={[styles.main,!open?{top:top,borderTopRightRadius:10,borderTopLeftRadius:10}:{top:top,borderTopRightRadius:0,borderTopLeftRadius:0}]}>
                <PanGestureHandler style={{zIndex:4}} onGestureEvent={(evt)=>handleGesture(evt)} >
                    <Image source={restaurant.bgImage}/>
                </PanGestureHandler>
                    <ScrollView contentContainerStyle={{display:'flex',alignItems:'center'}}>
                        
                        <View style={styles.restaurantInfo}>
                            <Text style={styles.restaurantName}>
                                {restaurant.name}
                            </Text>
                            <TagsContainer tagFoods={tagFoods.filter(tag=>restaurant.tags.includes(tag.name))}></TagsContainer>
                            <View style={styles.restaurantInfoSecond}>
                                <View style={styles.restaurantInfoClassification}>
                                    <Ionicons name="star" color="#44BB6B" size={8}/> 
                                    <Text style={styles.text}> {restaurant.avaliation}</Text>
                                </View>
                                <Text>*</Text>
                                <Text style={styles.text}>{restaurant.distance} Km</Text>
                                <Text>*</Text>
                                <Text style={[styles.text,{fontWeight:'bold',fontSize:20}]}>{Array(restaurant.deliveryTax).fill('$').join('')}</Text>
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
                        <TouchableOpacity style={styles.promotionsButton} onPress={()=>console.log('promotions button pressed!!!')}>
                            <Text style={styles.prommotionButtonText}>2 promotions available &#10140;</Text>
                        </TouchableOpacity>
                        <View style={{width:'80%'}}>
                            <Text style={styles.adressHone}>Popular Dishes</Text>
                            <FoodsPlates_Home plates={restaurant.popularPlates}></FoodsPlates_Home>
                        </View>
                    </ScrollView>    
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        position:'absolute',
        zIndex:3,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:30,
        marginTop:51,
        paddingHorizontal:20
    },
    IconButton:{
        padding:8,
        backgroundColor:'white',
        borderRadius:10,
    },
    map:{
        height:Dimensions.get('window').height*0.45,
        width:'100%',
        zIndex:1,
        opacity:1
    },
    main:{
        backgroundColor:'#fefefe',
        zIndex:2,
        height:Dimensions.get('window').height,
    },
    restaurantInfo:{
        width:'88%',
        marginLeft:'6%',
        marginRight:'6%',
        margin:30,
        marginHorizontal:24,
    },
    restaurantName:{
        fontSize:24,
        lineHeight:28,
        fontWeight:"600",
        fontFamily: 'Poppins_400Regular' ,
        marginBottom:15,
        paddingLeft:15
    },
    restaurantInfoSecond:{
        width:'50%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        margin:15
    },
    restaurantInfoClassification:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontFamily:'Poppins_400Regular',
        fontSize:16,
        lineHeight:22,
        color:'#1D262A'
    },
    description:{
        lineHeight:20,
        fontSize:14,
        fontFamily:'Poppins_400Regular',
        marginLeft:15,
        marginTop:24,
        color:'#1D262A',
        opacity:0.7
    },
    adress:{
        marginLeft:15,
        marginTop:23
    },
    adressHone:{
        fontFamily:'Poppins_400Regular',
        fontSize:18,
        lineHeight:22,
        fontWeight:'bold',
        color:'#1D262A',
    },
    adressText:{
        fontFamily:'Poppins_400Regular',
        fontSize:16,
        lineHeight:18,
        fontWeight:'normal',
        color:'#1D262A',
        opacity:0.8,
        marginTop:8
    },
    adressExtras:{
        marginTop:8,
        fontWeight:'bold',
        fontFamily:'Poppins_400Regular',
        fontSize:16,
        lineHeight:18,
        color:'#36C07E',
        letterSpacing:0.5
    },
    promotionsButton:{
        backgroundColor:'#FF754F',
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:50,
        marginHorizontal:32,
        marginBottom:32
    },
    prommotionButtonText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'600',
        fontFamily:'Poppins_400Regular',
        fontSize:16,
        lineHeight:20,
    }
});