export const APIHttp = 'http://localhost:4000/api/v1/';

// const userData = JSON.parse(localStorage.getItem('loginData'));

// const accessToken = userData.accessToken;
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjExNDAwNTU2NTMwODlhOTg4ZGNhNjQiLCJlbWFpbCI6InJhakBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InJhaiIsImZ1bGxOYW1lIjoiUmFqIFphZGFmaXlhIiwiaWF0IjoxNzE0ODMxNDE2LCJleHAiOjE3MTQ5MTc4MTZ9.cD5jeod0TYe2ZVA2DbKXvpVZ3OJ7Jz62FL7W12jS8fE';

export const Header = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + accessToken
  }
};
