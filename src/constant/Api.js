export const APIHttp = 'http://localhost:4000/api/v1/';

// const userData = JSON.parse(localStorage.getItem('loginData'));

// const accessToken = userData.accessToken;
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjExNDAwNTU2NTMwODlhOTg4ZGNhNjQiLCJlbWFpbCI6InJhakBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InJhaiIsImZ1bGxOYW1lIjoiUmFqIFphZGFmaXlhIiwiaWF0IjoxNzE0ODgxNTU4LCJleHAiOjE3MTQ5Njc5NTh9.mPXW0cLKEKckG-iouGsOjpv-ClSRvKZ16Ie_sDCuhYQ';

export const Header = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + accessToken
  }
};
