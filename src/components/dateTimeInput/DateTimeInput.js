import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import AppTextInput from '../textInput/TextInput';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
export default ({title,date,setDate}) => {
  const [open, setOpen] = useState(false);
  const formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
  return (
    <>
      <View>
        <TouchableWithoutFeedback onPress={() => setOpen(true)}>
          <AppTextInput
            placeholder={title}
            editable={false}
            value={`${title} ${formattedDate}`}
          />
        </TouchableWithoutFeedback>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          androidVariant="iosClone"
        />
      </View>
    </>
  );
};
