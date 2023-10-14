import axios from "axios";

const Authorization =
  "Bearer patpLWAvqiUYJkXaZ.6a3dec5ea69b8a99a8f0bab41b31bd38a27832f6e458474baecbfd0af3a595dc";

class MoviesService {
  static async getAllMovies(params) {
    const response = await axios.get(
      "https://api.airtable.com/v0/appD3LqdJac0RzHa1/movies",
      {
        headers: {
          Authorization,
        },
        params,
      }
    );
    return response;
  }

  static async getMovieById(id) {
    const response = await axios.get(`http://45.147.248.85/movies/${id}`);
    return response.data;
  }

  static async getTopMovies(limit) {
    const response = await axios.get(
      "https://api.airtable.com/v0/appD3LqdJac0RzHa1/movies",
      {
        headers: {
          Authorization,
        },
        params: {
          pageSize: limit,
          fields: ["title", "coverImage", "id"],
          sort: [
            { field: "year", direction: "desc" },
            { field: "id", direction: "desc" },
          ],
        },
      }
    );
    return response;
  }

  static async getRecommendedMovies(type) {
    const response = await axios.get(
      "https://api.airtable.com/v0/appD3LqdJac0RzHa1/movies",
      {
        headers: {
          Authorization,
        },
        params: {
          pageSize: 6,
          fields: ["title", "coverImage", "id"],
          sort: [{ field: "views", direction: "desc" }],
          filterByFormula: `SEARCH('${type}', {type})`,
        },
      }
    );

    return response;
  }

  static async getAllActors() {
    const response = await axios.get(
      "https://api.airtable.com/v0/appD3LqdJac0RzHa1/actors",
      {
        headers: {
          Authorization,
        },
        params: {
          sort: [{ field: "actor", direction: "asc" }],
        },
      }
    );

    return response;
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
