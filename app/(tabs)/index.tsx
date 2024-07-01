import { useInfiniteQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchTopRatedMovies } from '~/api/movies';
import MovieListItems from '~/components/MovieListItems';

export default function Home() {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam }) => fetchTopRatedMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => 2,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  const movies = data?.pages.flat();

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }}
        renderItem={({ item }) => <MovieListItems movie={item} />}
        onEndReached={() => {
          console.log('end reached');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
