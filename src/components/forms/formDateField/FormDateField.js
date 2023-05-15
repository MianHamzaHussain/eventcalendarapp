import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import DateTimeInput from '../../dateTimeInput/DateTimeInput';
const FormDateField = ({name, ...rest}) => {
  const {values, setFieldValue, errors, touched} = useFormikContext();
  const setDate = date => {
    setFieldValue(name, date);
  };
  const date = values[name];
  return (
    <>
      <DateTimeInput {...rest} setDate={setDate} date={date} />
      <ErrorMessage error={errors?.[name]} visible={touched?.[name]} />
    </>
  );
};

export default FormDateField;
