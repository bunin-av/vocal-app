import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import CourseSelect from "./components/CourseSelect/CourseSelect";
import {StyleSheet, View} from "react-native";
import {CourseSelectsData} from "./components/CourseSelect/enum";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/*<Navigation colorScheme={colorScheme}/>*/}
        <StatusBar/>
        <View style={s.container}>
          <CourseSelect title={CourseSelectsData.beginners.title} image={CourseSelectsData.beginners.img}/>
          <CourseSelect title={CourseSelectsData.advanced.title} image={CourseSelectsData.advanced.img}/>
        </View>
      </SafeAreaProvider>
    );
  }
}

const s = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
