import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const RegisterStyles = StyleSheet.create({
  container: {padding: 20},
  logo: {
    height: 80,
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  registerButton: {
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterStyles;
