import { handleResponse, handleError } from './apiUtils';
// const baseUrl =
//   'http://localhost:' +
//   (process.env.PORT || 8081) +
//   '/api/covid-19/collegehelps/';
const baseUrl = 'https://voyage-into-space.herokuapp.com/api/scores';

export async function getData() {
  return await fetch(baseUrl).then(handleResponse).catch(handleError);
}

export async function setData(entry) {
  return fetch(baseUrl, {
    method: 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(entry),
  })
    .then(handleResponse)
    .catch(handleError);
}
