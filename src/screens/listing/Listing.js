import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Card from '../../components/card/Card';
import {FlatList} from 'react-native-gesture-handler';
import styles from './ListingStyle';
import TextInput from '../../components/textInput/TextInput';
import DateTimeInput from '../../components/dateTimeInput/DateTimeInput';
import Loader from '../../components/loader/Loader';

const Listing = ({
  startDate,
  setStart,
  endDate,
  setEnd,
  loading,
  data,
  title,
  setTitle,
  navigation,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          name="title"
          placeholder="Search Title "
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <DateTimeInput title="Start Date" date={startDate} setDate={setStart} />
        <DateTimeInput title="Start Date" date={endDate} setDate={setEnd} />
        {loading ? (
          <View style={styles.loaderCon}>
            <Loader />
          </View>
        ) : (
       
            <FlatList
              data={data}
              keyExtractor={item => item?.['_id']}
              renderItem={({item}) => (
                <Card
                  title={item.title}
                  description={item.description}
                  start={item.start}
                  end={item.end}
                  guests={item.guests}
                  id={item?.['_id']}
                  key={item?.['_id']}
                  isPublic={item?.isPublic}
                  navigation={navigation}
                />
              )}
            />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Listing;
