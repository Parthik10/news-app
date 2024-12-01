import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import SocialIcons from './Socials';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = ({ country = 'in', category = 'science', setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    loadArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadArticles = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7e00bec2122a4390beb7777ec962b40e&page=${page}&pageSize=12`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error('Error fetching articles:', error.message);
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7e00bec2122a4390beb7777ec962b40e&page=${page}&pageSize=12`;
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch more articles');
      }
      const data = await response.json();
      setArticles([...articles, ...data.articles]);
      setTotalResults(data.totalResults);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching more articles:', error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <SocialIcons />
      <div className=""></div>
      <h2 className="text-center text-black" id="heading">
        News-Mirror Top-{category} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4><Spinner/></h4>}
      >
        <div className="container">
          <div className="container mx-3 row my-3 ">
            {articles.map(({ title, description, urlToImage, url, author, publishedAt, source }) => (
              <div className="container col-md-4" key={url}>
                <NewsItem
                  title={title ? title.slice(0, 44) : ''}
                  description={description ? description.slice(0, 80) : ''}
                  imgUrl={urlToImage}
                  newsUrl={url}
                  author={author}
                  date={publishedAt}
                  source={source.id}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
