import { FontAwesome } from '@expo/vector-icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import { fetchMovie } from '~/api/movies';
import { addMovieToWatchList } from '~/api/watchlist';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const {
    data: movie,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovie(id),
  });

  const { mutate } = useMutation({
    mutationFn: () => addMovieToWatchList(id),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View>
      <Stack.Screen
        options={{
          title: movie.title,
        }}
      />
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` }}
        style={{ width: '100%', height: 300 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 500, marginVertical: 10 }}>{movie.title}</Text>
        <View style={{ marginVertical: 10 }}>
          <Pressable
            onPress={() => mutate()}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <FontAwesome name="bookmark-o" size={24} color="black" />
            <Text>Add to watchlist</Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
