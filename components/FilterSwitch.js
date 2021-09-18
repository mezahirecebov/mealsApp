import React,{useState} from 'react';
import { StyleSheet, Text, View,Switch,Platform } from 'react-native';

import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Color from '../constants/Color';


const FilterSwitch =props=>{
    return(
            <View style={styles.filterContainer}>
                        <Text>{props.label}</Text>
                        <Switch 
                            value={props.state}
                            onValueChange={props.onValueChange}
                            trackColor={{true:Color.primaryColor}}
                            thumbColor={Platform.OS === 'android' ?  Color.primaryColor : ''}
                        />
                    </View>
    )
};

const styles=StyleSheet.create({
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:10,

    }
});

export default FilterSwitch;