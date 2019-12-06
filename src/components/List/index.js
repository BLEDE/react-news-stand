import React from 'react';
import ListItem from '../ListItem';

const List = ({ stories }) => (
    <div>
        {stories.map(story => (
            <ListItem key={story.id} {...story} />
        ))}
    </div>
)

export default List;