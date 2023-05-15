import React,{useState,useEffect} from 'react';
import {getMonthDates} from '../../utils/share';
import {useDispatch, useSelector} from 'react-redux';
import {getPublicEvents} from '../../store/actions/eventsAction';
import Listing from '../listing/Listing';
const PublicEvent = ({navigation}) => {
  const dispatch = useDispatch();
  const {publicEvents, loading} = useSelector(state => state.events);
  const {start, end} = getMonthDates();
  const [startDate, setStart] = useState(start);
  const [endDate, setEnd] = useState(end);
  const [title, setTitle] = useState('');
  useEffect(() => {
    dispatch(getPublicEvents(startDate, endDate, title));
  }, [startDate, endDate, title]);

  return (
    <Listing
      startDate={startDate}
      setStart={setStart}
      endDate={endDate}
      setEnd={setEnd}
      loading={loading}
      data={publicEvents}
      title={title}
      setTitle={setTitle}
      navigation={navigation}
    />
  );
};

export default PublicEvent;
