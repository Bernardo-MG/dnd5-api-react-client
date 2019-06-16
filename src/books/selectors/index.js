
export const selectBooks = (state) => {
   const result = [];
   const source = state.book.books;

   Object.keys(source).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
         result.push(source[key].title);
      }
   });

   return result;
};
