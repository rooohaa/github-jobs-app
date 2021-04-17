export const searchBy = (list, keyword, fullTime, city, location) => {
   if (fullTime) {
      list = list.filter(
         (item) => item.type.toLowerCase().trim() === 'full time'
      )
   }

   if (city) {
      list = list.filter((item) => {
         const location = item.location.toLowerCase().replaceAll(' ', '')

         return location === city.toLowerCase().trim()
      })
   }

   if (location) {
      list = list.filter((item) =>
         item.location
            .toLowerCase()
            .trim()
            .includes(location.toLowerCase().trim())
      )
   }

   if (keyword) {
      list = list.filter(
         (item) =>
            item.company
               .toLowerCase()
               .trim()
               .includes(keyword.toLowerCase().trim()) ||
            item.title
               .toLowerCase()
               .trim()
               .includes(keyword.toLowerCase().trim())
      )
   }
   return list
}
