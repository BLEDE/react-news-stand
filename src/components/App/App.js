import React, { Component } from 'react';
import List from '../List';
import InfiniteScroll from 'react-infinite-scroll-component';
import './styling.css';


class App extends Component {
    componentDidMount() {
        this.props.fetchStoriesFirstPage();
    }

    fetchStories = () => {
        const { storyIds, page, fetchStories, isFetching } = this.props;
        if (!isFetching) {
            fetchStories({ storyIds, page });
        }
    };

    render() {
        const { stories, hasMoreStories } = this.props;
        return (
            <div>
                <div className="page-header">The News Stand</div>
                <InfiniteScroll
                    dataLength={stories.length}
                    next={this.fetchStories}
                    hasMore={hasMoreStories}
                    loader={'LOADING...'}
                    style={{
                        height: '100%',
                        overflow: 'visible'
                    }}
                >
                    <List stories={stories} />
                </InfiniteScroll>
            </div>
        );
    }
}

export default App;
