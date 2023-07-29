
export const fetchDataFromApi = async (url) => {
  const response = await fetch("https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=" + url,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SUMMARY_API_KEY,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log(data);
  return data;
};
