import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home/Home'
import Alarm from './Alarm/Alarm'

const Stack = createNativeStackNavigator()
const Router = () => {
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen name='Homepage' component={Home} options={{ headerShown: false }} />
				<Stack.Screen name='Alarm' component={Alarm} options={{ headerShown: false }} />
			</Stack.Navigator>
		</>
	)
}
export default Router
