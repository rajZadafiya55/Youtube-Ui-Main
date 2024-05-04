import axios from 'axios';

import { GET_ALL_VIDEOS } from '../types';
import { APIHttp, Header } from 'constant/Api';

const getvideos = (video) => ({
  type: GET_ALL_VIDEOS,
  payload: video
});

export const getAllVideos = () => {
  return (dispatch) => {
    axios
      .get(`${APIHttp}videos`, Header)
      .then((res) => {
        dispatch(getvideos(res.data.data));
        console.log('data', res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
