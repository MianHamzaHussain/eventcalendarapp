import React from 'react';
import {useFormikContext} from 'formik';
import TextInput from '../../textInput/TextInput';
import ErrorMessage from '../../errorMessage/ErrorMessage';
const FormField = ({name,width, ...rest}) => {
  const {handleChange, setFieldTouched, errors, touched} = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
        width={width}
      />
      <ErrorMessage error={errors?.[name]} visible={touched?.[name]} />
    </>
  );
};

export default FormField;
