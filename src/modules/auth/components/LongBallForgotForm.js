import React from 'react';
import { Text, View, Form, Button } from 'native-base';
import { Image } from 'react-native';
import InputComponent from '~/components/InputComponent';

const logo = require('~/assets/images/logo-main.png');

const LongBallForgotForm = () => {
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
			<Text
				style={{
					color: 'white',
					alignSelf: 'center',
					fontSize: 30,
					fontWeight: 'bold',
					marginBottom: 20,
				}}
			>
				Forgot Password
			</Text>
			<Form>
				<InputComponent
					keyboardType="default"
					placeholder="Enter your email"
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
							Submit
						</Text>
					</View>
				</Button>
			</Form>
		</View>
	);
};

LongBallForgotForm.propTypes = {};

export default LongBallForgotForm;
