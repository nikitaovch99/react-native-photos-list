import styled from "styled-components/native";

  const PhotoImage = styled.Image`
    height: 100%;
    width: 100%;
  `;

import { RootStackParamList } from "../types/RootParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Nav = NativeStackScreenProps<RootStackParamList, "FullPhoto">;

export const FullPhoto = ({ route }: Nav) => {
  const { image } = route.params;
  return (
      <PhotoImage source={{ uri: image.urls.full }}></PhotoImage>
  );
};