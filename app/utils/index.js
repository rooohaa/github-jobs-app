export const searchBy = (list, keyword) => {
   return list.filter(
      (item) =>
         item.company
            .toLowerCase()
            .trim()
            .includes(keyword.toLowerCase().trim()) ||
         item.title.toLowerCase().trim().includes(keyword.toLowerCase().trim())
   );
};
