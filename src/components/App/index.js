import { connect } from 'react-redux';
import actions from '../../store/story/actions';
import App from './App';
import { hasMoreStoriesSelector } from '../../store/story/selectors';

const mapStateToProps = state => ({
    hasMoreStories: hasMoreStoriesSelector(state),
    stories: state.story.stories,
    page: state.story.page,
    storyIds: state.story.storyIds,
    isFetching: state.story.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
    fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({storyIds, page}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);