/* eslint-disable no-undef */   
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import ImageList from "./ImageList";

const Home = () => {
    // console.log("Hello");
  const [imageList, setImageList] = useState([]);

  const loadFunc = (e) => {
    console.log(e);
    axios.get(`https://api.unsplash.com/photos/?page=${e}&per_page=20&client_id=${import.meta.env.VITE_REACT_APP_API_KEY}`)
      .then(response => setImageList(old => [...old, ...response.data]));
  }

  return (
    <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <ImageList images={imageList} />
      </InfiniteScroll>
  )
}

export default Home;