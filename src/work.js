
const formSearch = document.getElementById('search-form')
const body = document.querySelector('.body')
const button = document.getElementsByTagName("button")

formSearch.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault()
    const form = e.currentTarget
    const searchQuery = form.elements.searchQuery.value
    console.log(searchQuery);
    fetchPicture(searchQuery)
        // .then().catch(error => console.log(error))


}



 function fetchPicture(searchQuery) {
   if (searchQuery) {
      const url = `https://pixabay.com/api/?key=24572731-dd81b25f4ab1454a48aca0751&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true?fields=webformatURL,largeImageURL,tags,likes,views,comments,downloads`
      return fetch(url)
        .then(response => {
         if (!response.ok) {
           throw Error(response.statusText)
       }
   return   response.json()
    })   
}
}
