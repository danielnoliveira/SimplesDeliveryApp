import React,{useState,useRef} from 'react'
import { View, Text, StyleSheet,Dimensions,Image,Animated,ScrollView } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView,{Marker} from 'react-native-maps';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {FoodsPlates_Home,IconButton,RestaurantInfo} from './../components';
const {restaurant} = require('./../constants/mocks');

const {latitude,longitude} = restaurant.coordenates;


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
                        
                        <RestaurantInfo />
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