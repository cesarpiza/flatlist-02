import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import DATA from './data'
import Item from './components/item/index'
import ItemSeparator from './components/itemSeparator/index';
import FilterUser from './components/filterUser/index';

const { width, height } = Dimensions.get('window');
const SPACING = width * 0.03;

export default function App() {

  const [data, setData] = useState(DATA);
  const [searchText, setSearchText] = useState('');
  const [statusOrder, setStatusOrder] = useState(false);

  useEffect(() => {
    if (searchText === '') {
      setData(DATA)
    } else {
      setData(
        DATA.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ))
    }
  }, [searchText])

  const handleOrderClick = () => {
    const newData = [...data];
    setStatusOrder(
      (prev) => {
        if (!prev) {
          setData(
            newData.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
          )
        } else {
          setData(
            newData.sort((a, b) => b.name > a.name ? 1 : b.name < a.name ? -1 : 0)
          )
        }
        return !prev
      }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <FilterUser handleOrderClick={handleOrderClick} searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        contentContainerStyle={{
          padding: SPACING,
          backgroundColor: '#111',
        }}
        ItemSeparatorComponent={ItemSeparator}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <Item {...item} />
          )
        }}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});