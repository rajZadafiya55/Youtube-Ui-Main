export const APIHttp = 'http://localhost:4000/api/v1/';

// const userData = JSON.parse(localStorage.getItem('loginData'));

// const accessToken = userData.accessToken;
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjExNDAwNTU2NTMwODlhOTg4ZGNhNjQiLCJlbWFpbCI6InJhakBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InJhaiIsImZ1bGxOYW1lIjoiUmFqIFphZGFmaXlhIiwiaWF0IjoxNzE1MDg1MjIxLCJleHAiOjE3MTUxNzE2MjF9.aNNRW4TL7NIlOX75QpmvDECY48hPhkkl-e73CXTKgLg';

export const Header = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + accessToken
  }
};
