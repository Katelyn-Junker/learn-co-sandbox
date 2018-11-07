const submitButton= document.querySelector('submit')
submitButton.addEventListener('click', (event) =>{
  const input = document.querySelector('input')
  const movieName = input.value
  fetch('http://www.omdbapi.com/?apikey=c87ebb66&t=' + movieName)
    .then((response) =>response.json)
    .then((movieJson) =>{
      const title = document.querySelector('#title')
      
    })
})