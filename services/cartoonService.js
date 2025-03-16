"use server";

export const fetchCartoonAll = async () => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/cartoon`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch cartoon: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cartoon:", error);
    return [];
  }
};

export const fetchCartoonById = async (id) => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/cartoon/${id}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch cartoon: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cartoon:", error);
    return [];
  }
};

export const searchCartoonByTitle = async (title) => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/cartoon?search=${title}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch cartoon: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cartoon:", error);
    return [];
  }
};

export const fetchAllCartoonGenres = async () => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/cartoon_genre`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch genres: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};

export const fetchCartoonByGenreId = async (id) => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/cartoon_genre/${id}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch genre: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching genre:", error);
    return [];
  }
};
