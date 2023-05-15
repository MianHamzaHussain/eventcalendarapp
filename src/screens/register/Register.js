import {Image, SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import React, {useEffect} from 'react';
const logo = require('../../../assets/logo-red.png');
import {Form, FormField, SubmitButton} from '../../components/forms/forms';
import * as Yup from 'yup';
import styles from './RegisterStyle';
import {register} from '../../store/actions/authAction';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/loader/Loader';
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).label('Password'),
  confirmPassword: Yup.string()
  .required()
  .min(5)
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .label('Confirm Password'),
});
const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.auth);
  const nav = screen => navigation.navigate(screen);
  const onSubmit = values => {
    try {
      const payload={
        name:values.name,
        email:values.email,
        password:values.password,
      }
      dispatch(register(payload, nav));
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
            name="name"
            icon={'account'}
            placeholder="Name"
            autoCorrect={false}
            autoCapitalize={'none'}
          />
          <FormField
            name="email"
            icon={'email'}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <FormField
            name={'password'}
            icon={'lock'}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
          />
          <FormField
            name={'confirmPassword'}
            icon={'lock'}
            placeholder="Confirm Password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
          />
          {loading ? (
            <Loader />
          ) : (
            <>
              <SubmitButton title={'Register'} color="danger" />
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerButtonText}>
                  Already have an account? Login now!
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Form>
      </View>
    </SafeAreaView>
  );
};

export default Register;
