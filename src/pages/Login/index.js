import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Animated } from 'react-native';
import styles from './styles';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    
    async function singIn() { 
        try {
            const obj = {
                email: 'brncavallari@outlook.com',
                password: '12345'
            };

            const response = await api.post('/authentication', obj);

            const { token } = response.data;

            await AsyncStorage.multiSet([
                ['@tokenJWT', token]
            ])
            

        } catch(err){
            console.log("error", err);
        }    
    }

    return (
        <View style={styles.body}>
            <Animated.Image
                style={{ width: 200, height: 200 , marginBottom: 10}}
                source={require('../../assets/logoChute.png')}
            />
            <TextInput
                style={styles.input}
                value={email}
                placeholder='Email'
                onChangeText={setEmail}
                placeholderTextColor="gray"
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder='Senha'
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholderTextColor="gray"
            />

            <Pressable style={styles.button} onPress={singIn}>
                <Text style={styles.textButton}>{"Entrar"}</Text>
            </Pressable>
        </View>
  );
   
};