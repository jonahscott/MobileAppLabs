import React from 'react';
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <Text>Cool Lab App</Text>
      <Text>Jonah Scott</Text>
      <Text>November 23, 2023</Text>
    </MainLayout>
  );
};

export default AboutScreen;
