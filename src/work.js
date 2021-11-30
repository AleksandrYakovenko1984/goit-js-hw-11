
const formSearch = document.getElementById('search-form')
const body = document.querySelector('.body')
const galeryList = document.querySelector('.gallery')
const button = document.getElementsByTagName("button")
const btnLoadMore = document.querySelector('.load-more')
const modalWindow = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
import cardList from "./cardList.hbs"
import Notiflix from "notiflix"

import img from './bigPicture.hbs'
formSearch.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', onLoadMore)
 galeryList.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
 

let page = 1
let per_page = 40

let searchQuery = "";




function createCardList(data) {
   
  return data.map(cardList).join('')

}

function onSearch(e) {
    e.preventDefault()
    const form = e.currentTarget
     searchQuery = form.elements.searchQuery.value
  
  page = 1;
  fetchPicture(searchQuery)
 


}



async function fetchPicture(searchQuery) {
  btnLoadMore.classList.add('is-hidden')
 
   if (searchQuery) {

    const BASE_URL = `https://pixabay.com/api/?key=24572731-dd81b25f4ab1454a48aca0751`
      const url = `${BASE_URL}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page*page}`
      const data = await fetch(url)
        .then(response => {
         if (!response.ok) {
           throw Error(response.statusText)
         }
         return response.json()
       });
     
     if (per_page * page < data.totalHits) {
       btnLoadMore.classList.remove('is-hidden')
       
     } 
     const renderCardList = createCardList(data.hits)
     galeryList.innerHTML = renderCardList
    
    //  createCardList(data.hits)
    }
}
function onLoadMore() {
  page = page + 1
  fetchPicture(searchQuery)
  
}

function openModal(data) {
  
  modalWindow.classList.add('is-open')
//   console.log(img);
//  modalWindow.innerHTML = img
}
function closeModal() {
  modalWindow.classList.remove('is-open')
}
function showError() {
     return Notiflix.Notify.failure("We're sorry, but you've reached the end of search results");
}