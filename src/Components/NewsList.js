import React from 'react';
import NewsItem from './NewsListItem';


const NewsList = (props) => {
 const items = props.news.map((item)=>{
    return (
        <NewsItem key= {item.id} item= {item}/>
    )
 });



    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;