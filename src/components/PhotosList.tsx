import { View, Text, FlatList, TouchableOpacity, StatusBar } from "react-native";
import React, { useState, useEffect} from 'react';
import { Photo } from './Photo';
import { Loading } from "./Loading";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { RootStackParamList } from "../types/RootParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Snackbar } from "react-native-paper";
import { init } from "../features/photos";

type Props = NativeStackScreenProps<RootStackParamList, "PhotoList">;

export const PhotoList = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  const {data, loading, error } = useAppSelector((state) => state.photos);

  return loading ? (
    <Loading />
  ) : (
    <>
      <View>
        <StatusBar></StatusBar>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("FullPhoto", { image: item })}
            >
              <Photo
                title={item.alt_description}
                author={item.user.username}
                photo={item.urls.regular}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <Snackbar
        visible={error}
        onDismiss={() => {}}
        action={{
          label: "Try again",
          onPress: () => {
            dispatch(init());
          },
        }}
        style={{ backgroundColor: "gray" }}
      >
        <View>
          <Text>Error occurred</Text>
        </View>
      </Snackbar>
    </>
  );
};