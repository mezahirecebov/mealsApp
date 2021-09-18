import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

import Color from '../constants/Color';
const  CustomHeaderButton =props=>{
       
        return(
        <HeaderButton {...props}
                       IconComponent={Ionicons} 
                       iconSize={23}
                       color='white'
        />);
};

const style=StyleSheet.create({

});


export default CustomHeaderButton;