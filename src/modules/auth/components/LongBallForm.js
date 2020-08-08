import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Form, Button } from 'native-base';
import { TouchableOpacity, Image } from 'react-native';
import InputComponent from '~/components/InputComponent';

const logo = require('~/assets/images/logo-main.png');

const LongBallForm = ({ navigation }) => {
	return (
		<View>
			<Image
				source={logo}
				style={{
					width: 260,
					height: 130,
					alignSelf: 'center',
					marginBottom: 50,
				}}
			/>
			<Form>
				<InputComponent keyboardType="default" placeholder="Username" />
				<InputComponent
					isPassword
					keyboardType="default"
					placeholder="Password"
				/>

				<Button
					style={{
						backgroundColor: '#009d64',
						marginHorizontal: 30,
						borderRadius: 30,
						height: 60,
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 20,
					}}
				>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ alignSelf: 'center', color: '#fff' }}>
							LOGIN
						</Text>
					</View>
				</Button>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Register');
					}}
					style={{ marginVertical: 20 }}
				>
					<Text
						style={{
							textAlign: 'center',
							color: 'white',
						}}
					>
						Forgot Password
					</Text>
				</TouchableOpacity>
			</Form>
		</View>
	);
};

LongBallForm.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

export default LongBallForm;
