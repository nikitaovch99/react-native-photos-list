import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PhotoList } from "./PhotosList";
import { FullPhoto } from "./FullPhoto";
import React from "react";
import { useAppDispatch } from '../features/hooks';
import { init } from "../features/photos";
import { RootStackParamList } from "../types/RootParams";


const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PhotoList"
          component={PhotoList}
          options={{ title: "PhotoList" }}
        />
        <Stack.Screen
          name="FullPhoto"
          component={FullPhoto}
          options={{ title: "FullPhoto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};