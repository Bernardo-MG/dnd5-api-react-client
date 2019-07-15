import superagent from 'superagent';

const API_ROOT = 'https://openlibrary.org';

const requests = {
   get: (url) => superagent.get(`${API_ROOT}${url}`).then((response) => JSON.parse(response.text))
};

const Books = {
   byTitle: (query) => requests.get(`/search.json?q=${query}&mode=everything`)
};

export default {
   Books
};
