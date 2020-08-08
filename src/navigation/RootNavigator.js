import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const Root = createStackNavigator();

function RootNavigator() {
	const auth = useSelector(({ auth: authInfo }) => authInfo);

	return (
		<Root.Navigator mode="modal">
			{auth.isLoggedIn ? (
				// Nakapaglogin
				<Root.Screen
					component={DrawerNavigator}
					name="Main"
					options={{ headerShown: false }}
				/>
			) : (
				/**
				 * Login Screenn
				 */
				<Root.Screen
					component={AuthNavigator}
					name="Auth"
					options={{ headerShown: false }}
				/>
			)}
		</Root.Navigator>
	);
}

RootNavigator.propTypes = {};

export default RootNavigator;
