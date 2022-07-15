const seeBooks = document.querySelector('.books')
const meetMembers = document.querySelector('.members')
const contentDisplay = document.querySelector('.content-container')
const searchInput = document.querySelector("[data-search]")

let book = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  book.forEach(book => {
    const isVisible =
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value)
    book.element.classList.toggle("hide", !isVisible)
  })
})

const getBooks = async () => {
    apiData = await fetch('https://fakerapi.it/api/v1/books')
    const jsonData = await apiData.json()
    const books = jsonData.data

    for (let book of books) {
        const title = book.title
        const author = book.author
        const cover = book.image //trying to get the cover of book to appear
        const description = book.description

        const bookInfo = document.createElement('div')
        bookInfo.className = 'book-container'
        bookInfo.innerHTML = 
        `<h3>${title}</h3>
        <h4>${author}</h4>
        <div>📚</div>
        <p>${description}</p>`
        contentDisplay.append(bookInfo)
    }
}

seeBooks.addEventListener('click', getBooks)