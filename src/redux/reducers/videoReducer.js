import { GET_ALL_VIDEOS } from '../types';

export const initialState = {
  videosDetails: [] //for store all video data
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOS:
      return {
        ...state,
        videosDetails: action.payload
      };

    default:
      return state;
  }
};

export default videoReducer;
