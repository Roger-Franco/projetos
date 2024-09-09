const express = require('express')
const router = express.Router();

const {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook
} = require('../controllers/books')


router.route('/').get(getAllBooks).post(createBook)
router.route('/:id').get(getBook).patch(updateBook).delete(deleteBook)

// router.get('/', getAllBooks)
// router.post('/', createBook)
// router.put('/:id', getBook)
// router.put('/:id', updateBook)
// router.put('/:id', deleteBook)

// router.get('/api/v1/Books')        - get all the Books
// router.post('/api/v1/Books')       - create a new Book
// router.post('/api/v1/Books/:id')   - get single Book
// router.patch('/api/v1/Books/:id')  - update Book
// router.delete('/api/v1/Books/:id') - delete Book

module.exports = router