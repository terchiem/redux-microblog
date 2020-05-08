import {
  GET_TITLES,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  CHANGE_VOTE
} from './actionTypes';


function titlesReducer(state = [], action) {

  switch (action.type) {
    case GET_TITLES:
      return action.titles.sort((a, b) => b.votes - a.votes);

    case ADD_POST:
      const newTitle = {
        id: action.post.id,
        title: action.post.title,
        description: action.post.description,
        votes: action.post.votes,
      };
      const sortedTitlesNew = [...state, newTitle];
      return sortedTitlesNew.sort((a, b) => b.votes - a.votes)

    case EDIT_POST:
      const titlesToEdit = [...state];
      let editedTitle = titlesToEdit.find(t => t.id === action.post.id);

      editedTitle.title = action.post.title;
      editedTitle.description = action.post.description;
      editedTitle.votes = action.post.votes;

      return titlesToEdit;

    case DELETE_POST:
      return state.filter(t => t.id !== action.postId);

    case CHANGE_VOTE:
      const titlesCopy = [...state];
      const updatedTitle = titlesCopy.find(t => t.id === action.postId);
      updatedTitle.votes = action.votes;
      return titlesCopy.sort((a, b) => b.votes - a.votes);

    default:
      return state;
  }
}

export default titlesReducer;