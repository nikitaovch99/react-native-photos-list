import React from 'react';
import styled from 'styled-components/native';

const PhotoName = styled.Text`
  font-size: 16px;
  font-weight: 800;
`;

const PhotoView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  boreder-bottom-color: black;
  border-bottom-style: solid;
`;

const PhotoAuthor = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const PhotoImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PhotoDetails = styled.View`
  width: 260px;
`;

type Props = {
  photo: string;
  title: string | null;
  author: string;
}

export const Photo = ({ photo, title, author }: Props) => {
  return (
    <PhotoView>
      <PhotoImage source={{ uri: photo }} />
      <PhotoDetails>
        <PhotoName>{title ?? 'no title'}</PhotoName>
        <PhotoAuthor>{`Made by: ${author}`}</PhotoAuthor>
      </PhotoDetails>
    </PhotoView>
  )
}