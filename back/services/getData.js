const axios = require("axios");
const getData = async () => {
  try {
    axios
      .get("https://random-data-api.com/api/v2/users", {
        params: { size: 100 },
      })
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.error(error);
  }
};
module.exports = getData;
