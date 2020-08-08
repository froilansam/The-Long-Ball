import React from 'react';
import PropTypes from 'prop-types';
import { View, Input, Item } from 'native-base';

const InputComponent = ({ isPassword, keyboardType, placeholder }) => {
	return (
		<View
			style={{
				backgroundColor: 'gray',
				borderRadius: 30,
				paddingVertical: 5,
				marginHorizontal: 30,
				opacity: 0.7,
				marginVertical: 5,
			}}
		>
			<Item style={{ marginLeft: 30, borderBottomWidth: 0 }}>
				<Input
					autoCapitalize="none"
					keyboardType={keyboardType}
					placeholder={placeholder}
					placeholderTextColor="white"
					secureTextEntry={isPassword}
					style={{ color: '#fff' }}
				/>
			</Item>
		</View>
	);
};

InputComponent.propTypes = {
	isPassword: PropTypes.string,
	keyboardType: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

InputComponent.defaultProps = {
	isPassword: false,
};

export default InputComponent;
