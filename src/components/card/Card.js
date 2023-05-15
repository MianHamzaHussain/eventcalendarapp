import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ConfirmModal from '../confirmModal/ConfirmModal';
import {removeEvent} from '../../store/actions/eventsAction';
const Card = ({
  title,
  description,
  start,
  end,
  guests,
  isPublic,
  id,
  navigation,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);
  const dispatch = useDispatch();
  const handleConfirm = (v, isP) => {
    try {
      dispatch(removeEvent(v, isP));
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };
  const {user} = useSelector(state => state.auth);
  const isAdmin = user.isAdmin;
  const formattedStartDate = new Date(start).toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  const formattedEndDate = new Date(end).toLocaleString([], {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {isAdmin ? (
            <>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iconContainer}>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('ManageEvent', {
                        data: {
                          title,
                          description,
                          start,
                          end,
                          guests,
                          category: `${isPublic}`,
                          id,
                        },
                      })
                    }>
                    <McIcon name="pencil" style={styles.icon} />
                  </TouchableWithoutFeedback>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      toggleModal();
                    }}>
                    <McIcon name="delete" style={styles.icon} />
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </>
          ) : (
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>i</Text>
            </View>
          )}
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.info}>
          <Text style={styles.date}>
            {formattedStartDate} - {formattedEndDate}
          </Text>
          <View style={styles.guestsContainer}>
            <Text style={styles.guests}>{guests.length}</Text>
            <Text style={styles.guestsText}>
              {guests.length > 1 ? 'guests' : 'guest'}
            </Text>
          </View>
        </View>
      </View>
      <ConfirmModal
        visible={modalVisible}
        message="Are you sure you want to delete this event?"
        onConfirm={() => handleConfirm(id, isPublic)}
        onCancel={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2C2E33',
    borderRadius: 10,
    marginHorizontal: 9,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 4,
  },
  details: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: '#3D3D3D',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#B9B9B9',
    fontSize: 14,
    marginBottom: 16,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    color: '#B9B9B9',
    fontSize: 12,
  },
  guestsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guests: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 4,
  },
  guestsText: {
    color: '#B9B9B9',
    fontSize: 12,
  },
});

export default Card;
