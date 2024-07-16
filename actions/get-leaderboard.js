"use server";

const buildUrl = (month, year) => {
  const API_BASE_URL =
    "https://packdraw.com/api/v1/affiliates/leaderboard?after=";
  const API_KEY = "e174b184-87d4-47e4-85da-1fac082d9461";

  const time = `${month}-01-${year}`;

  return `${API_BASE_URL}${time}&apiKey=${API_KEY}`;
};

export const getLeaderboard = async (month, year) => {
  const url = buildUrl(month, year);
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data?.leaderboard?.length > 0) {
      return data;
    } else {
      // console.log("Error", data);
    }
  } catch (error) {
    // console.error(error);
  }
  return null;
};
