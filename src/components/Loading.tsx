import React from "react";
import { Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoadingView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Loading = () => {
  return (
    <LoadingView>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </LoadingView>
  );
};
