import React from 'react';

import { Text, TextInput, View, Image } from 'react-native';

const Cat = (props: { name: string }) => {

  return (

    <View>

      <Text>Hello, I am {props.name}!</Text>

    </View>

  );

};

const CatApp = () => (
  <View  style={{ margin: 20, marginTop: 80, gap: 80 }}>
    <View>

      <Text>Hello, I am...</Text>

      <TextInput

        style={{
          marginTop: 20,
          height: 40,
          padding: 10,
          borderColor: 'gray',

          borderWidth: 1,
        }}

        defaultValue="Name me!" />
       
    </View>
    
    <View>

      <Cat name="Maru" />

      <Cat name="Jellylorum" />

      <Cat name="Spot" />

    </View>


    <View>

      <Image

        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}

        style={{ width: 200, height: 200 }} />

      <Text>Hello, I am your cat!</Text>

    </View>


  </View>
);

export default CatApp;
