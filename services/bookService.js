"use server";

export const fetchBookAll = async () => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/book`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch cards: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    return [];
  }
};

export const fetchCategoriesBook = async () => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/book_category`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchBookById = async (id) => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/book/${id}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch book: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book:", error);
    return [];
  }
};

export const searchBookByTitle = async (title) => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/book?search=${title}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch book: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book:", error);
    return [];
  }
};
