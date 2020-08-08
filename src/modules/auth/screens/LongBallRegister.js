import * as React from 'react';
import { connect } from 'react-redux';

import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';

import { ImageBackground } from 'react-native';
import { login as loginAction } from '~/modules/auth/auth.actions';
import utils from '~/utils';

import styles from './LoginScreen.style';
import LongBallForgotForm from '../components/LongBallForgotForm';

const bg = require('~/assets/images/herobanner-image.jpg');

function LongBallRegister({ navigation }) {
	return (
		<Container>
			<ImageBackground
				imageStyle={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					resizeMode: 'stretch',
					width: '100%',
					height: '100%',
				}}
				resizeMethod="resize"
				resizeMode="cover"
				source={bg}
				style={{ width: '100%', height: '100%' }}
			>
				<Content contentContainerStyle={styles.content} padder>
					<LongBallForgotForm navigation={navigation} />
				</Content>
			</ImageBackground>
		</Container>
	);
}

LongBallRegister.navigationOptions = {
	header: null,
};

LongBallRegister.propTypes = {
	navigation: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = {
	login: loginAction,
};

export default utils.compose(connect(null, mapDispatchToProps))(
	LongBallRegister,
);
