import React, { useState } from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from './src/components/Navigation';
import store from './src/store';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style={'auto'} />
      <Navigation />
    </Provider>
  );
}

