import React from 'react';
import Text from '../text/Text';
import styles from './ErrorMessageStyle';
const ErrorMessage = ({error, visible}) => {
  if (!error || !visible) return null;
  return <Text text={error} style={styles.error} />;
};

export default ErrorMessage;


