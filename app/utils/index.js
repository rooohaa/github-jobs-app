export const searchBy = (list, keyword, fullTime) => {
   if (fullTime) {
      list = list.filter(
         (item) => item.type.toLowerCase().trim() === 'full time'
      );
   }

   return list.filter(
      (item) =>
         item.company
            .toLowerCase()
            .trim()
            .includes(keyword.toLowerCase().trim()) ||
         item.title.toLowerCase().trim().includes(keyword.toLowerCase().trim())
   );
};
