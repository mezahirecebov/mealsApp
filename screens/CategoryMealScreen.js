import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import { CATEGORIES,MEALS } from '../data/dummy-data';
import Color from '../constants/Color';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
const CategoryMealScreen=(props)=>{
    const catId=  props.navigation.getParam('categoryId');
    // const selectedCat=CATEGORIES.find(cat=>cat.id===catId);

    const availableMeals=useSelector(state=>state.meals.filteredMeals);

    const displayMeals=availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0);

    if(displayMeals.length === 0){
        return(
        <View style={styles.content}>
            <DefaultText>No meals found,check filters</DefaultText>
        </View>)
    }

            return (
                <MealList listData={displayMeals}
                navigation={props.navigation}/>
            )
};

CategoryMealScreen.navigationOptions=(navigationData)=>{
    const catId=     navigationData.navigation.getParam('categoryId');
    const selectedCat=CATEGORIES.find(cat => cat.id===catId);
    return {
        headerTitle:selectedCat.title,
       

    };
}

const styles=StyleSheet.create({
        content:{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
        }
});

export default CategoryMealScreen;