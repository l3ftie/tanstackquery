import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { fetchMovie } from '~/api/movies';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ['movieDetails'],
    queryFn: fetchMovie(id),
  });
  console.log(data);
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default MovieDetails;
