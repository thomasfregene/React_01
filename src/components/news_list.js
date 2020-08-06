import React from 'react';

import NewsItem from './news_list_item';

const NewsList =(props)=>{
    const news =props.news.map((item, index)=>(
        <NewsItem item={item} key={index}/>
    ))
    return(
        <>
            {news}
        </>
    )
}

export default NewsList;