const booksDOM = document.querySelector('.books')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.book-form')
const bookInputDOM = document.querySelector('.book-input')
const formAlertDOM = document.querySelector('.form-alert')
// Load books from /api/books
const showbooks = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { books },
    } = await axios.get('/api/v1/books')
    if (books.length < 1) {
      booksDOM.innerHTML = '<h5 class="empty-list">No books in your list</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allbooks = books
      .map((book) => {
        const { completed, _id: bookID, name } = book
        return `<div class="single-book ${completed && 'book-completed'}">
<h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
<div class="book-links">



<!-- edit link -->
<a href="book.html?id=${bookID}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${bookID}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`
      })
      .join('')
    booksDOM.innerHTML = allbooks
  } catch (error) {
    booksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showbooks()

// delete book /api/books/:id

booksDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/books/${id}`)
      showbooks()
    } catch (error) {
      console.log(error)
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = bookInputDOM.value

  try {
    await axios.post('/api/v1/books', { name })
    showbooks()
    bookInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, book added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})
