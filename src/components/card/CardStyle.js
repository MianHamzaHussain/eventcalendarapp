import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    margin: 5,
    overflow: 'hidden',
  },
  detailContainer: {
    padding: 16,
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  guestsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  guestsLabel: {
    color: '#999',
    fontSize: 14,
    marginRight: 4,
    textAlign: 'center',
  },
  guests: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    color: '#999',
    fontSize: 14,
    marginRight: 4,
    textAlign: 'center',
  },
  date: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
