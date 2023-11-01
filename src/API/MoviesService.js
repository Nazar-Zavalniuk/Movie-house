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
    const response = await axios.get(
      `https://api.airtable.com/v0/appD3LqdJac0RzHa1/movies`,
      {
        headers: {
          Authorization,
        },
        params: {
          filterByFormula: `SEARCH("${id}", id)`,
        },
      }
    );
    return response;
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
            { field: "serialNumber", direction: "desc" },
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

  static async getAllActors(offset) {
    const response = await axios.get(
      "https://api.airtable.com/v0/appD3LqdJac0RzHa1/actors",
      {
        headers: {
          Authorization,
        },
        params: {
          sort: [{ field: "actor", direction: "asc" }],
          offset,
        },
      }
    );

    return response;
  }

  static async rateMovie(data) {
    const response = await axios.post(
      `https://api.airtable.com/v0/appD3LqdJac0RzHa1/userRatings`,
      data,
      {
        headers: {
          Authorization,
        },
      }
    );
    return response;
  }

  static async getUserByName(username) {
    const response = await axios.get(
      "https://api.airtable.com/v0/appD3LqdJac0RzHa1/users",
      {
        headers: {
          Authorization,
        },
        params: {
          filterByFormula: `IF("${username}" = username, 1, BLANK())`,
        },
      }
    );
    return response;
  }

  static async addNewUser(user) {
    const response = await axios.post(
      "https://api.airtable.com/v0/appD3LqdJac0RzHa1/users",
      {
        records: [
          {
            fields: user,
          },
        ],
      },
      {
        headers: {
          Authorization,
        },
      }
    );
    return response;
  }

  static async updateUserData(userId, data) {
    const response = await axios.patch(
      `https://api.airtable.com/v0/appD3LqdJac0RzHa1/users`,
      {
        records: [
          {
            id: userId,
            fields: data,
          },
        ],
      },
      {
        headers: {
          Authorization,
        },
      }
    );
    return response;
  }
}

export default MoviesService;
