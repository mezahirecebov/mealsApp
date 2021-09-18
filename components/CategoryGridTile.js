import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';

const CategoryGridTile=props=>{
    return( 
        <View style={styles.gridItem}>
        <TouchableOpacity style={{flex:1}} onPress={props.onSelect}>
        <View style={{...styles.container  ,...{backgroundColor:props.color}}}  >
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View></TouchableOpacity></View>
    )
};

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,    
        borderRadius:10,
        overflow:'hidden',
        elevation:5,
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:3,
        elevation:3,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15,
        
    },
    title:{
        // fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'right',
    }

});


export default CategoryGridTile;
