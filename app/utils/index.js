export const searchBy = (list, keyword, fullTime, city) => {
   if (fullTime) {
      list = list.filter(
         (item) => item.type.toLowerCase().trim() === 'full time'
      );
   }

   if (city) {
      list = list.filter((item) => {
         const location = item.location.toLowerCase().replaceAll(' ', '');

         return location === city.toLowerCase().trim();
      });
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
