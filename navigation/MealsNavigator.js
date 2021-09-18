import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import {createDrawerNavigator} from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';
import React from 'react'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen  from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen'; 
import FavoritesScreen from '../screens/FavoritesScreen';
import Color from '../constants/Color';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native';

const defaultStackNavOptions={
           headerTitle:'Default Screen',
           headerStyle:{
               backgroundColor:Color.primaryColor,
           },
           headerTintColor:'white',
       };

const MealsNavigator= createStackNavigator({
            Categories:{
                screen:CategoriesScreen,
                navigationOptions:CategoriesScreen.navigationOptions,   
            },
            CategoryMeals:{
                screen:CategoryMealScreen,
                navigationOptions:CategoryMealScreen.navigationOptions,
            },
            MealDetail:{ 
                screen:MealDetailScreen,
                navigationOptions:MealDetailScreen.navigationOption,
            } 
    },
    {defaultNavigationOptions:defaultStackNavOptions} 
    ); 

const FavNav =createStackNavigator({
    Favorites:{
        screen:FavoritesScreen,
        navigationOptions:FavoritesScreen.navigationOption,
    },
    MealDetail:{
        screen:MealDetailScreen,
        navigationOptions:MealDetailScreen.navigationOption,

    }
    },
    {defaultNavigationOptions: defaultStackNavOptions}
     )  ;  


const tabScreenConfig = {
    Meals:{
        screen:MealsNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return (<Ionicons name='ios-restaurant' size={25}
                            color={tabInfo.tintColor}
                         />)
            },
            tabBarColor:Color.primaryColor 
        }
    },
    Favorites:{
        screen:FavNav,
        navigationOptions:{
            tabBarLabel:'Favorites!',
            tabBarIcon:(tabInfo)=>{
                return (<Ionicons name='ios-star' size={25}
                            color={tabInfo.tintColor}
                         />)
            },
            tabBarColor:Color.accentColor ,
        }
    }
    }   

const MealsFavTabNavigator= Platform.OS==='android' ? createMaterialBottomTabNavigator(
             tabScreenConfig,{
                 activeColor:'white',
                 shifting:true,
                 barStyle:{
                        backgroundColor:Color.primaryColor
                 },
             }

        ): createBottomTabNavigator(
            tabScreenConfig,
    {
        tabBarOptions:{
            activeTintColor:Color.accentColor,

        }
    }
);  

const FiltersNavigator=createStackNavigator(
    {
    Filters:FiltersScreen,   
    } ,
    
       
    
    {
        navigationOptions:{
            drawerLabel:'Filters!!!'
        },
        defaultNavigationOptions:defaultStackNavOptions
    }
    
    );

const MainNavigator=createDrawerNavigator(
    {
        MealsFav:{screen:MealsFavTabNavigator,
                    navigationOptions:{
                        drawerLabel:'Meals',
                    }},
        Filters:FiltersNavigator
    },
    {
        contentOptions:{
            activeTintColor:Color.accentColor ,
            labelStyle:{
                fontFamily:'open-sans'
            }
        }
    }
    
    );

export default createAppContainer(MainNavigator)  ;  