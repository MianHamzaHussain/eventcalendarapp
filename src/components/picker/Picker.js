import {View, Modal, Button, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../text/Text';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import PickerItem from '../pickerItem/PickerItem';
import styles from './PickerStyle';

const Picker = ({
  icon,
  items,
  placeholder,
  selectedId,
  setSelectedId,
  isMultiSelect = false,
  width = '100%',
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggle = () => setModalVisible(!modalVisible);

  const handleSelectItem = itemId => {
    if (isMultiSelect) {
      let newSelectedIds = [...selectedId];
      if (selectedId.includes(itemId)) {
        newSelectedIds = selectedId.filter(id => id !== itemId);
      } else {
        newSelectedIds.push(itemId);
      }
      setSelectedId(newSelectedIds);
    } else {
      // Single-select mode, select the item and close the modal
      setSelectedId(itemId);
      toggle();
    }
  };

  const renderPickerItem = ({item}) => (
    <PickerItemComponent
      item={item}
      label={item.label}
      selected={
        isMultiSelect
          ? selectedId.includes(item.value)
          : selectedId === item.value
      }
      onPress={() => handleSelectItem(item.value)}
    />
  );

  const renderSelectedText = () => {
    if (isMultiSelect) {
      const selectedItems = items.filter(item =>
        selectedId.includes(item.value),
      );
      const selectedLabels = selectedItems.map(item => item.label);
      return selectedLabels.length > 0
        ? selectedLabels.join(', ')
        : placeholder;
    } else {
      const selectedItem = items.find(item => item.value === selectedId);
      return selectedItem ? selectedItem.label : placeholder;
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={toggle}>
        <View style={[styles.container, {width}]}>
          <McIcon
            name={icon}
            size={20}
            color={styles.gray}
            style={styles.icon}
          />
          <Text style={styles.placeholder} text={renderSelectedText()} />
          <McIcon name={'chevron-down'} size={20} color={styles.gray} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible}>
        <SafeAreaView>
          <Button title="Close" onPress={toggle} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={item => item.value}
            renderItem={renderPickerItem}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Picker;
