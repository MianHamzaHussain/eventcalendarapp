import React from 'react';
import {useFormikContext} from 'formik';
import Button from '../../button/Button';
export default function SubmitButton({title, color}) {
  const {handleSubmit} = useFormikContext();
  
  return <Button title={title} color={color} onPress={handleSubmit} />;
}
