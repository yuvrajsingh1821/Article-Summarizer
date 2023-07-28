import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineEnter } from "react-icons/ai";
import { useState } from "react";
import { fetchDataFromApi } from "../utils/fetchData";
import spinner from "../assets/spinner.svg";

const Article = () => {
  const [articleUrl, setArticleUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);

  {/*get the summary */}
  const fetchSummary = async (url) => {
    setLoading(true);
    const { summary } = await fetchDataFromApi(url);
    setSummary(summary);
    setCloseBtn(true);
    setLoading(false);
  };

  {/*reset all the states*/}
  const reset = () =>{
    setSummary("");
    setArticleUrl("");
    setLoading(false);
    setCloseBtn(false);
  }

  return (
    <div className="max-w-[800px] mx-auto mt-20 px-4">
      {/* heading section*/}
      <div>
        <h1 className="text-white text-4xl md:text-5xl text-center uppercase">
          AI Article Summarizer
        </h1>
        <p className="text-white text-center mt-7 text-lg md:text-xl">
          Summarize your articles by providing the article link below.
        </p>
      </div>

      {/*url section*/}
      <div className="mt-7 flex items-center bg-white justify-between">
        
        <AiOutlineLink className="bg-white h-10 w-7 rounded-md pl-1" />
        
        <input
          type="text"
          placeholder="Enter URL here"
          className="px-2 py-2 w-64 md:w-full focus:outline-0 flex-1"
          value={articleUrl}
          onChange={(e) => setArticleUrl(e.target.value)}
        />
        
        <button onClick={() => fetchSummary(articleUrl)} className="bg-white p-2 border-2">
          <AiOutlineEnter className="text-xl"/>
        </button>
      </div>

      {/*will show loading until data arrives */}
      {loading ? (
        <div className="flex justify-center mt-4">
          <img src={spinner} alt="" className="w-32"/>
        </div>
      ) : (
        <div className="text-white mt-6 ">
          {summary}
        </div>
      )}
      
      {closeBtn && <button className="bg-gradient-to-r from-white via-slate-200 to-gray-500 px-3 text-lg font-medium rounded-2xl h-9 text-black mt-2" onClick={reset}>Close</button>}
    </div>
  );
};

export default Article;
