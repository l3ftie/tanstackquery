import { useInfiniteQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchTopRatedMovies } from '~/api/movies';
import MovieListItems from '~/components/MovieListItems';

export default function Home() {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchTopRatedMovies(pageParam),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  const movies = data?.pages?.flat();

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }} /*  */
        renderItem={({ item }) => <MovieListItems movie={item} />}
        onEndReached={() => {
          fetchNextPage();
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
