const { default: axios } = require("axios");
const { log } = require("console");



   const url ="https://api.github.com"
   const endP="/users/"


   //Higher-Order Functions
    const getDataFromApi =(url)=>(endP)=>axios
    .get(url+endP).
    then(result=>result.data)
    .catch(err=>log(err))

  const data = getDataFromApi(url)
  const result =data(endP)
  .then((res)=>(JSON.stringify(res)))

  result.then(res=>log(res))
