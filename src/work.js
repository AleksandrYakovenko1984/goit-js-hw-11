 const BASE_URL = `https://pixabay.com/api/?key=24572731-dd81b25f4ab1454a48aca0751`
const formSearch = document.getElementById('search-form')
const body = document.querySelector('.body')
const galeryList = document.querySelector('.gallery')
const button = document.getElementsByTagName("button")
const btnLoadMore = document.querySelector('.load-more')
const modalWindow = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
import Notiflix from "notiflix"
import cardList from "./cardList.hbs"
import img from './bigPicture.hbs'
formSearch.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click',  onLoadMore)
galeryList.addEventListener('click', (elem) => {
  const condition = elem.target.nodeName === "IMG"
 
  
  if (condition) {
    openModal()
  }
  
 } )
closeBtn.addEventListener('click', closeModal)
 

let page = 1
let per_page = 40

let searchQuery = "";




function createCardList(data) {
   
  return data.map(cardList).join('')
 
}
function createCardModal(data) {

  return data.map(img)
 
}
function onSearch(e) {
    e.preventDefault()
    const form = e.currentTarget
     searchQuery = form.elements.searchQuery.value
  
  page = 1;
  fetchPicture(searchQuery).then().catch((error)=>{showError()})
 


}



async function fetchPicture(searchQuery) {
  btnLoadMore.classList.add('is-hidden')
 
   if (searchQuery) {

   
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
     const renderModal = createCardModal(data.hits)
     const renderCardList = createCardList(data.hits)
     galeryList.innerHTML = renderCardList
     
     renderModal.forEach(element => {
       
       if (openModal) {
         modalWindow.innerHTML = element
         modalWindow.append(closeBtn);
       }
     })
    //  createCardList(data.hits)
    }
}
function onLoadMore() {
  page = page + 1
  fetchPicture(searchQuery)
 
}

function openModal() {
  
  modalWindow.classList.add('is-open')

//  modalWindow.insertAdjacentHTML('beforeend', img)
}
function closeModal() {
  modalWindow.classList.remove('is-open')
  
}
function showError() {
     return Notiflix.Notify.failure("");
}