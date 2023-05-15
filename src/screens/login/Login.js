import {
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
const logo = require('../../../assets/logo-red.png');
import {Form, FormField, SubmitButton} from '../../components/forms/forms';
import * as Yup from 'yup';
import styles from './LoginStyle';
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).label('Password'),
});
import {login} from '../../store/actions/authAction';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/loader/Loader';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const { loading, error} = useSelector(state => state.auth);
  const nav=(screen) => navigation.navigate(screen)
  const onSubmit = values => {
    try {
      dispatch(login(values,nav));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (error) Alert.alert(error);
  }, [error]);
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Form
          initialValues={{email: '', password: ''}}
          onSubmit={values => onSubmit(values)}
          validationSchema={validationSchema}>
          <FormField
            name="email"
            icon={'email'}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            disable={loading}
          />
          <FormField
            name={'password'}
            icon={'lock'}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
            disable={loading}
          />
          {loading ? (
            <Loader />
          ) : (
            <>
              <SubmitButton title={'login'} color="danger" />
              <TouchableOpacity
                style={styles.registerButton}
                onPress={()=>nav('Register')}>
                <Text style={styles.registerButtonText}>
                  Don't have an account? Register now!
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Form>
      </View>
    </SafeAreaView>
  );
};

export default Login;
