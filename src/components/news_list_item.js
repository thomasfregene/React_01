import React from 'react';

// let news_item = css({
//     padding: '20px',
//     boxSizing: 'border-box',
//     borderBottom: '1px solid grey',
//     ':hover': {
//         color: 'red'
//     }
// })

// let item_back = css({
//     background: 'grey'
// })

const NewsItem =({item})=>{
    return(
        <div className='news_item'>
        <h3>{item.title}</h3>
        <div>
            {item.feed}
        </div>
    </div>
    )
}


export default NewsItem;