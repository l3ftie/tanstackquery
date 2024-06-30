import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchTopRatedMovies } from '~/api/movies';
import { fetchWatchListMovies } from '~/api/watchlist';
import MovieListItems from '~/components/MovieListItems';

export default function WatchList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['watchlist'],
    queryFn: fetchWatchListMovies,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }}
        renderItem={({ item }) => <MovieListItems movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
