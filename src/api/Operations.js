import superagent from 'superagent';

export const Operations = class {

   constructor(url) {
      this.url = url;
   }

   search(query) {
      return superagent.get(`${this.url}metadata/${query}`).end();
   }

};
