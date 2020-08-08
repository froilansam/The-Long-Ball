import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '~/modules/auth/screens/LoginScreen';
import LongBallRegister from '~/modules/auth/screens/LongBallRegister';

const Stack = createStackNavigator();

export default function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={LoginScreen}
				name="Login"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				component={LongBallRegister}
				name="Register"
				options={{
					headerTransparent: true,
					headerTintColor: '#fff',
					headerTitle: null,
				}}
			/>
		</Stack.Navigator>
	);
}

AuthNavigator.propTypes = {};
