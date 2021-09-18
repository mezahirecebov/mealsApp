import React,{useState,useEffect,useCallback} from 'react';
import { StyleSheet, Text, View,Switch } from 'react-native';

import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import FilterSwitch from '../components/FilterSwitch';
import HeaderButton from '../components/HeaderButton';
import Color from '../constants/Color';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';
const FiltersScreen=(props)=>{

    const  {navigation} =props;  

    const  [isGlutenFree,setIsGlutenFree]=useState(false);
    const  [isLactoseFree,setIsLactose]=useState(false);
    const  [isVeganFree,setIsVeganFree]=useState(false);
    const  [isVegetarianFree,setIsVegetarianFree]=useState(false);


    const dispatch=useDispatch();

    const saveFilters=useCallback(()=>{
        const appliedFilters={
            glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVeganFree,
            vegetarian:isVegetarianFree
        };


            dispatch(setFilters(appliedFilters));
    },[isGlutenFree,isLactoseFree,isVeganFree,isVegetarianFree,dispatch]);

    useEffect(()=>{
        props.navigation.setParams(
        {
            save:saveFilters,
        }
        );
    },[saveFilters]);


            return (
                <View style={styles.screen}>
                    <Text style={styles.title}>
                    Available Filters /Restrictions
                    </Text>

                    <FilterSwitch label='Gluten-free'
                        state={isGlutenFree}
                        onValueChange={newVal=>setIsGlutenFree(newVal)}/>

                    <FilterSwitch label='Lactose-free'
                            state={isLactoseFree}
                            onValueChange={newVal=>setIsLactose(newVal)}/>


                    <FilterSwitch label='Vegan'
                        state={isVeganFree}
                        onValueChange={newVal=>setIsVeganFree(newVal)}/>

                     <FilterSwitch label='Vegeterian'
                        state={isVegetarianFree}
                        onValueChange={newVal=>setIsVegetarianFree(newVal)}/>    


                    </View>
            )
};

FiltersScreen.navigationOptions= (navigationData)=>{
    return{
     headerTitle:'Filter meal',
     headerLeft:()=>(
     <HeaderButtons HeaderButtonComponent={HeaderButton} >
 
         <Item title='Menu' iconName='ios-menu'
             onPress={()=>{
                     navigationData.navigation.toggleDrawer();
             }} />
 
     </HeaderButtons>   ),

    
    headerRight:()=>(
    <HeaderButtons HeaderButtonComponent={HeaderButton} >

        <Item title='Save' iconName='ios-save'
            onPress={
                   navigationData.navigation.getParam('save')

            } />

    </HeaderButtons>   ),
    
    
    
    
    }
   
 };

const styles=StyleSheet.create({
        screen:{
            flex:1,
            
            alignItems:'center'
        },
        title:{
            fontFamily:'open-sans-bold',
            fontSize:22,
            margin:20,          
            textAlign:'center',
        },
        
});

export default FiltersScreen;