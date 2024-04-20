import React from "react";
import { Breed } from "@src/services/breeds";
import { Text, View } from "react-native";

export const BreedCard = ({ id, name, origin, temperament, weight }: Breed) => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{origin}</Text>
      <Text>{temperament}</Text>
      <Text>{weight.imperial}</Text>
      <Text>{weight.metric}</Text>
    </View>
  );
};
