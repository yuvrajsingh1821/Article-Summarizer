
export const fetchDataFromApi = async (url) => {
  const response = await fetch("https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=" + url,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "99b0c2b799mshac66b999b73c18fp1dc052jsn36a780436ae3",
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
