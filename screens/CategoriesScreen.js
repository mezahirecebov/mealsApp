import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';
import CategoryGridTile from '../components/CategoryGridTile';

import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const CategoriesScreen=(props)=>{

            const  renderGridItem=(itemData)=>{
                return(
                        <CategoryGridTile 
                                 title={itemData.item.title} 
                                 color={itemData.item.color}
                                 onSelect={()=>{
                                 props.navigation.navigate({routeName:'CategoryMeals',
                                 params:{
                                    categoryId:itemData.item.id,
                                 }
                                  })
                                }}/>
                    )
            }

            return (
                <FlatList 
                 keyExtractor={(item,index)=>item.id}
                 data={CATEGORIES} 
                 renderItem={renderGridItem}
                 numColumns={2}/>
            )


};

CategoriesScreen.navigationOptions= (navigationData)=>{
   return{
    headerTitle:'Meals Categories',
    headerLeft:()=>(
    <HeaderButtons HeaderButtonComponent={HeaderButton} >

        <Item title='Menu' iconName='ios-menu'
            onPress={()=>{
                    navigationData.navigation.toggleDrawer();
            }} />

    </HeaderButtons>   )}
  
};

const styles=StyleSheet.create({
        screen:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },

        

});

export default CategoriesScreen;