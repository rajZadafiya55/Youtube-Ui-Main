import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { APIHttp, Header } from 'constant/Api';
import { ADD_VIDEOS, DELETE_VIDEOS, GET_ALL_VIDEOS } from '../types';

// Toast messages
const showToast = (message) => {
  toast.success(message, { position: 'top-right' });
};

const showErrorToast = (message) => {
  toast.error(message, { position: 'top-right' });
};

// Action creators
const addVideo = () => ({ type: ADD_VIDEOS });

const deleteVideo = (videoId) => ({
  type: DELETE_VIDEOS,
  payload: videoId
});

const getVideos = (videos) => ({
  type: GET_ALL_VIDEOS,
  payload: videos
});

// Thunks
export const getAllVideos = () => (dispatch) => {
  axios
    .get(`${APIHttp}videos`, Header)
    .then((res) => {
      dispatch(getVideos(res.data.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addVideoData = (formData) => (dispatch) => {
  const formDataToSend = new FormData();
  formDataToSend.append('title', formData.title);
  formDataToSend.append('description', formData.description);
  formDataToSend.append('videoFile', formData.videoFile);
  formDataToSend.append('thumbnail', formData.thumbnail);

  axios
    .post(`${APIHttp}videos`, formDataToSend, Header)
    .then((res) => {
      dispatch(addVideo());
      if (res.data.success) {
        showToast('Video added successfully!');
      } else {
        showErrorToast('Failed to upload video');
      }
    })
    .catch((err) => {
      console.log(err);
      showErrorToast('Failed to upload video');
    });
};

export const deleteVideoDetails = (videoId) => (dispatch) => {
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`${APIHttp}videos/${videoId}`, Header)
        .then(() => {
          dispatch(deleteVideo(videoId));
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success'
          });
        })
        .catch((err) => {
          console.log(err);
          showErrorToast('Failed to delete video');
        });
    }
  });
};
