import axios from "axios";

class MoviesService {
  static async getAllMovies(params) {
    const response = await axios.get("http://45.147.248.85/movies", {
      params,
    });
    return response;
  }

  static async getMovieById(id) {
    const response = await axios.get(`http://45.147.248.85/movies/${id}`);
    return response.data;
  }

  static async getTopMovies(limit) {
    const response = await axios.get("http://45.147.248.85/movies", {
      params: {
        _limit: limit,
        _sort: "year,id",
        _order: "desc,desc",
      },
    });
    return response.data;
  }

  static async getRecommendedMovies(type) {
    const response = await axios.get("http://45.147.248.85/movies", {
      params: {
        type,
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

  static async getAllActors() {
    const response = await axios.get("http://45.147.248.85/actors");
    const actors = response.data;
    const actorsByAlphabet = actors.sort((a, b) => a.localeCompare(b, "uk-UA"));
    return actorsByAlphabet;
  }

  static async updateMovieData(movieId, data) {
    const response = await axios.patch(
      `http://45.147.248.85/movies/${movieId}`,
      data
    );
    return response.status;
  }

  static async getUserByName(userName) {
    const response = await axios.get("http://45.147.248.85/users", {
      params: {
        userName: userName,
      },
    });
    return response.data[0];
  }

  static async addNewUser(user) {
    const response = await axios.post("http://45.147.248.85/users", user);
    return response.data;
  }

  static async updateUserData(userId, data) {
    const response = await axios.patch(
      `http://45.147.248.85/users/${userId}`,
      data
    );
    return response.data;
  }
}

export default MoviesService;
