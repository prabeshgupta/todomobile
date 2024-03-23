import { View, Text, StatusBar, SafeAreaView, Image, ImageBackground, Button, Pressable, TouchableOpacity, Switch, Modal, TextInput, FlatList, ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modal, setModal] = useState(false);
  const [textData, setTextData] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <Text>Hello World</Text>

      <Image source={require("./assets/icon.png")} style={{ width: 100, height: 100 }} />

      <ImageBackground source={require("./assets/splash.png")} style={{ height: 200 }}>
        <Text>Image Background</Text>
      </ImageBackground>

      <Button title='Submit' onPress={() => console.log("Clicked")} accessibilityLabel='Submit button' color="#44a" />

      <Pressable onPress={() => console.log("Image Clicked")}>
        <Image source={require("./assets/icon.png")} style={{ width: 100, height: 100 }} />
      </Pressable>

      <TouchableOpacity onPress={() => console.log("Touchable Opacity")} style={{ width: 200, height: 50, backgroundColor: "#ff0000", padding: 10 }}>
        <Text>Click here</Text>
      </TouchableOpacity>

      <Switch
        trackColor={{ false: '#ff0000', true: 'gren' }}
        thumbColor={isEnabled ? '#fff' : '#000'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Button onPress={() => setModal(true)} title='Model' />
      <Modal visible={modal} animationType='none'>
        <Text>Modal</Text>
        <Button onPress={() => setModal(false)} title='Model' />
      </Modal>

      <TextInput
        placeholder='Input name'
        style={{ padding: 10, borderWidth: 1, borderColor: "#000", width: "50%" }}
        value={textData}
        onChangeText={setTextData} />
      <Text>{textData}</Text>

      <FlatList data={DATA} renderItem={({ item }) => <Item item={item} />} keyExtractor={item => item.id} contentContainerStyle={{ gap: 10 }} showsVerticalScrollIndicator={false} />

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {DATA.map((item) => (
          <ItemScroll item={item} key={item.id} />
        ))}
      </ScrollView>

      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />

    </SafeAreaView >
  )
}

export default App;

const Item = ({ item }) => {
  return (
    <View style={{ width: "100%", height: 300, padding: 20, backgroundColor: "blue", marginTop: 10 }}>
      <Text>{item.title}</Text>
      {/* <Text>{item.id}</Text> */}
    </View>
  )
}

const ItemScroll = ({ item }) => {
  return (
    <View style={styles.itemScroll}>
      <Text>{item.title}</Text>
      {/* <Text>{item.id}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  itemScroll: {
    width: 300,
    height: 300,
    padding: 20,
    backgroundColor: "blue",
    marginTop: 150,
    marginHorizontal: 10
  },
})