// Note on console that JS has loaded, event listened for is the DOM content loading.
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

// Run a function that prevents the page reloating and pushes a new list item to the fav games list containing form contents, finish by clearing the form
const handleFormSubmit = function(event) {
  event.preventDefault()
  const resultList = document.querySelector('#fav-games');
  const newListItem = document.createElement('li');
  newListItem.innerHTML = `Title: ${event.target.title.value}<br> Publisher: ${event.target.publisher.value}<br> Genre: ${event.target.genre.value} <br>Status: ${event.target.completed.value} <br><img src = "${event.target.myImg.src}" width = 400 height = 200 style="padding: 5px 15px; float: left;">`
  resultList.appendChild(newListItem);
  // document.getElementbyID('#new-form').reset();
  input.value = ''
}

//Upon delete all, clear all children on fav games.

const handleFormDelete = function(event){
  event.preventDefault();
  const result = document.querySelector('#fav-games');
  result.innerHTML = ''
}

// function imageIsLoaded() {
//   alert(this.src);  // blob url
//   // update width and height ...
// }

// Add an event listener for the submit button on our form, pass through our function
const form = document.querySelector('#new-form')
form.addEventListener('submit', handleFormSubmit)

//Add an event listener for the delete button being clicked, pass through our function
const delForm = document.querySelector('.button-place')
delForm.addEventListener('click', handleFormDelete)

// Create a delete all button
const deleteAll = document.createElement("button")
deleteAll.innerHTML = "Delete All"
delForm.appendChild(deleteAll)

// Listen for the load and the change.

const imageUpload = window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});
});
