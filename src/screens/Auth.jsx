import {StyelSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import { Image } from 'react-native';

import { layoutStyles } from '../styles/index';

import logo from '../../assets/icon.png';
import reclaimer from '../../assets/reclaimer.png';
import ce from '../../assets/ce.jpg';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';

export default function Auth() {
    const [showLogin, setShowLogin] = useState(false);

    const changeForm = () => setShowLogin(!showLogin);

    return (
        <View style={layoutStyles.container}>
            <Image
                //source={logo}
                source={reclaimer}
                style={layoutStyles.logo}
            />
            {showLogin ? <LoginForm changeForm={changeForm}/> : <RegisterForm changeForm={changeForm}/>}
        </View>
    );
}