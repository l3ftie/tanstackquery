import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable } from 'react-native';

const MovieListItems = ({ movie }: any) => {
  return (
    <Link href={`/${movie.id}`} asChild>
      <Pressable style={{ flex: 1 }}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
          style={{ width: '100%', aspectRatio: 3 / 5, borderRadius: 20 }}
        />
      </Pressable>
    </Link>
  );
};

export default MovieListItems;
