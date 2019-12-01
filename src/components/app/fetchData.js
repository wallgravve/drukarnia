
  const baseUrl =
    "https://stock.adobe.io/Rest/Media/1/Search/Files?locale=pl_PL&";

  const options = {
    headers: {
      "x-api-key": "f176122c443e4569817bd6a18071adc3", // replace with your api-key
      "X-Product": "adobe-api/0.1.0",

    },
    params: {
      "search_parameters[words]": words,
      "search_parameters[limit]": perPage,
      "search_parameters[offset]": offset * 55
      // "search_parameters[filters][orientation]": inputOrientation
    }
  };
const fetchData = async () => {
  try {
    const response =  await fetch (baseUrl, options)
    const data  = await response.json()
    setImages(data.files)
  
  setTotalPhotos(data.nb_results)
    // const { currentPage } = await offset

  console.log("I am beign rendered again and again")
  console.log(data)


  } catch (e) {
    if (e) {
      setError(e.message)
      console.log("error")
    }
  }
  
}
export default fetchData;