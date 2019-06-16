import superagent from 'superagent';

export const Operations = class {

   constructor(url) {
      this.url = url;
   }

   search(query) {
      return superagent.get(`https://openlibrary.org/search.json?q=${query}&mode=everything`).then((response) =>
         JSON.parse(response.text));
   }

};
