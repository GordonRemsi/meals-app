import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import Colours from '../constants/Colours';

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
	},
	CategoryMeals: {
		screen: CategoryMealsScreen,
  	},
  	MealDetail: {
		screen: MealDetailScreen
	}
}, {
	mode: 'modal',
	defaultNavigationOptions: {
		headerTitleAlign: 'center',
		headerStyle: {
			  backgroundColor: Platform.OS === 'android' ? Colours.primaryColour : ''
		},
		  headerTintColor: Platform.OS === 'android' ? 'white' : Colours.primaryColour
	}
});

export default createAppContainer(MealsNavigator);