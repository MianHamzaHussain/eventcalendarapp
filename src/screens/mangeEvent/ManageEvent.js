import {SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../store/actions/userAction';
import {addEvent} from '../../store/actions/eventsAction';
import { useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import {
  Form,
  FormField,
  FormPicker,
  SubmitButton,
} from '../../components/forms/forms';
import FormDateField from '../../components/forms/formDateField/FormDateField';
import styles from './ManageEventStyle';
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  description: Yup.string().label('Description'),
  category: Yup.string().required().label('Category'),
  start: Yup.date().required().label('Start date'),
  end: Yup.date().required().label('Start date'),
  guests: Yup.array().label('Guest'),
});
const categories = [
  {
    label: 'Public',
    value: 'true',
  },
  {
    label: 'Private',
    value: 'false',
  },
];
const ManageEvent = ({navigation}) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const data = route.params?.data ?? '';
const {id,...rest}=data;
  const {users} = useSelector(state => state.user);
  const formattedUsers = users?.map?.(user => ({
    label: user.name,
    value: user.email,
  }))||[];
  const nav = screen => navigation.navigate(screen);
  const onSubmit = (values) => {
    try {
      dispatch(addEvent(values,nav));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Form
          initialValues={{
            title: '',
            category: '',
            guests: [],
            start: new Date(),
            end: new Date(),

          }}
          onSubmit={(values, { resetForm }) => onSubmit(values,resetForm)}
          validationSchema={validationSchema}>
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormPicker
            name="category"
            placeholder="Category"
            items={categories}
          />
          <FormPicker
            name="guests"
            placeholder="Guests"
            items={formattedUsers}
            isMultiSelect={true}
          />
          <FormField
            name="description"
            placeholder="Description"
            multiline
            numberOfLines={4}
            maxLength={320}
          />
          <FormDateField name="start" title="Start Date" />
          <FormDateField name="end" title="End Date" />
          <SubmitButton title={id?'Edit Event':'Add Event'} color="danger" />
        </Form>
      </View>
    </SafeAreaView>
  );
};

export default ManageEvent;
