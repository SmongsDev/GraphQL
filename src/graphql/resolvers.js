import movies from '/database/movies';

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, {id}) => {
            return movies.filter(movie => movie.id === id)[0];
        }
    },
    Mutation:{
        addMovie: (_, {name, rating}) => {
            const newMovie = {
                id: movie.length + 1,
                name,
                rating
            };    
            movies.push(newMovie);
            return newMovie;
        }        
    }
};
export default resolvers;