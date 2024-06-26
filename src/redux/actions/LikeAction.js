import axios from 'axios';
import { GET_LIKED_VIDEOS } from '../types';

import { APIHttp, Header } from 'constant/Api';

const getLikeVideo = (video) => ({
  type: GET_LIKED_VIDEOS,
  payload: video
});

export const getAllLikedVideos = () => {
  return (dispatch) => {
    axios
      .get(`${APIHttp}likes/videos`, Header)
      .then((res) => {
        dispatch(getLikeVideo(res.data.data));
        console.log('Liked data', res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
