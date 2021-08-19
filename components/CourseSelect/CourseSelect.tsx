import React from 'react';
import {TouchableHighlight, View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity} from "react-native";
// import image from '../assets/images/beginners_img.jpeg'

type TCourseSelect = {
  title: string
  image: any,
}
const CourseSelect = ({title, image}: TCourseSelect) => {
  return (

      <TouchableOpacity activeOpacity={0.5} onPress={() => {
      }}>
        <View style={s.container}>
          <ImageBackground source={image} resizeMode="cover" style={s.image} imageStyle={{borderRadius: 10}}>
            <Text style={s.title}>{title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    // </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: 380,
    height: 100,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "right",
    paddingRight: 10,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#111',
    textShadowRadius: 5,
    // fontShadow: 5,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    // alignContent: "flex-end",
  },
})

export default CourseSelect