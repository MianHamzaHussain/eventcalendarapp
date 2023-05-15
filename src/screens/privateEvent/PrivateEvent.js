import React,{useState,useEffect} from 'react';
import {getMonthDates} from '../../utils/share';
import {useDispatch, useSelector} from 'react-redux';
import {getPrivateEvents} from '../../store/actions/eventsAction';
import Listing from '../listing/Listing';
const PrivateEvent = ({navigation}) => {
  const dispatch = useDispatch();
  const {privateEvents, isPublicLoading} = useSelector(state => state.events);
  const {start, end} = getMonthDates();
  const [startDate, setStart] = useState(start);
  const [endDate, setEnd] = useState(end);
  const [title, setTitle] = useState('');
  useEffect(() => {
    dispatch(getPrivateEvents(startDate, endDate, title));
  }, [startDate, endDate, title]);

  return (
    <Listing
      startDate={startDate}
      setStart={setStart}
      endDate={endDate}
      setEnd={setEnd}
      loading={isPublicLoading}
      data={privateEvents}
      title={title}
      setTitle={setTitle}
      navigation={navigation}
    />
  );
};

export default PrivateEvent;
