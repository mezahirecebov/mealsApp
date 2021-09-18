import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
const FavoritesScreen=(props)=>{
    
    const availableMeals=useSelector(state=>state.meals.favoriteMeals);    

    if(availableMeals.length===0 || !availableMeals){
            return <View style={styles.content} >
                <DefaultText>No favorite meals found</DefaultText>
            </View>
    }
    else{
            return (
                <MealList listData={availableMeals}
                 navigation={props.navigation}/>
            )
    }
};

FavoritesScreen.navigationOptions= (navigationData)=>{
        return{
         headerTitle:'Your Favorites',
         headerLeft:()=>(
         <HeaderButtons HeaderButtonComponent={HeaderButton} >
     
             <Item title='Menu' iconName='ios-menu'
                 onPress={()=>{
                         navigationData.navigation.toggleDrawer();
                 }} />
     
         </HeaderButtons>   )}
       
     };

const styles=StyleSheet.create({
            content:{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'

            }
});



export default FavoritesScreen;