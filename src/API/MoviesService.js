import axios from "axios";

class MoviesService {
  static async getAll(params) {
    const response = await axios.get("http://localhost:3005/newMovies", {
      params,
    });
    return response;
  }

  static async getTopMovies(limit) {
    const response = await axios.get("http://localhost:3005/movies", {
      params: {
        _limit: limit,
        _sort: "year,rating",
        _order: "desc,desc",
      },
    });
    return response.data;
  }

  static async getRecommendedMovies(movieType) {
    const response = await axios.get("http://localhost:3005/movies", {
      params: {
        movieType: movieType,
        _sort: "views",
        _order: "desc",
        _limit: 24,
      },
    });

    const filteredMovies = response.data;
    const shuffledMovies = filteredMovies.sort(() => Math.random() - 0.5);
    const selectedMovies = shuffledMovies.slice(0, 6);
    return selectedMovies;
  }
}

export default MoviesService;
