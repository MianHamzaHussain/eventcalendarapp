import React from 'react';
import Picker from '../../picker/Picker';
import {useFormikContext} from 'formik';
import ErrorMessage from '../../errorMessage/ErrorMessage';
const FormPicker = ({
  icon,
  items,
  name,
  placeholder,
  width,
  numberOfColumns,
  PickerItemComponent,
  isMultiSelect,
}) => {
  const {values, setFieldValue, errors, touched} = useFormikContext();
  const setSelectedId = value => {
    setFieldValue(name, value);
  };
  return (
    <>
      <Picker
        icon={icon}
        items={items}
        placeholder={placeholder}
        selectedId={values[name]}
        setSelectedId={setSelectedId}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        isMultiSelect={isMultiSelect}
      />
      <ErrorMessage error={errors?.[name]} visible={touched?.[name]} />
    </>
  );
};

export default FormPicker;
