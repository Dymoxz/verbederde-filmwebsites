const searchInput = document.querySelector(".top-content #search")
console.log(searchInput)
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    const movies = document.querySelectorAll(".mov")
    movies.forEach(movie => {
        const title = movie.querySelector(".image-text").textContent.toLowerCase()
        if (title.includes(value)) {
            movie.style.display = "block"
        } else {
            movie.style.display = "none"
        }
    })
})