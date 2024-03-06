//ENDPOINTS
const API_URL = `https://api.thecatapi.com/v1`;
// api_key=live_xKPuRURI7sdbuuiXBuxx5xSgLJ7o4oYRBRVALsfStuudueWUUBbw6QHDUDWvjSEn`

const endpoints = {
  getRandomCats: `${API_URL}/images/search?limit=4`,
  getFavouriteCats: `${API_URL}/favourites`,
  deleteFavouriteCat: (id) => `${API_URL}/favourites/${id}?`,
  uploadImage: `${API_URL}/images/upload`,
};

export { endpoints };
