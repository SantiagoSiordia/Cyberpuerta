const IDontRememberTheNameOfTheFunction = (date) => (
   new Promise((resolve, reject) => {
      const url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
      https
         .get(url, (res) => {
            let data = "";
            res.on("data", (chunk) => {
               data += chunk;
            });
            res.on("end", () => {
               const json = JSON.parse(data);
               resolve(json.data.length > 0 ? json.data[0] : {});
            });
         })
         .on("error", (e) => {
            reject(e);
         });
   })
);