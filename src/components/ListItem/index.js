import React from 'react';
import getArticleLink from '../../utils/getArticleLink';
import './styling.css'

const ListItem = ({ title, url, id }) => {
    const articleUrl = getArticleLink({ url, id });

    return (
        <div className="titles">
            {title}
            <a className="article-link" href={articleUrl} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
};

export default ListItem;