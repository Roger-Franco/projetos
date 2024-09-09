const Book = require('../models/Book')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')


// const getAllBooks = async (req, res) => {
//   try {
//     const books = await Book.find({})
//     res.status(200).json({books})
//     // more examples
//     // res.status(200).json({books, amount: books.length})
//     // res.status(200).json({status: 'succes', data: {books, nbHits: books.length}})
//   } catch (error) {
//     res.status(500).json({ msg: error })    
//   }
// }

const getAllBooks = asyncWrapper( async (req, res) => {
    const books = await Book.find({})
    res.status(200).json({books})
})

// const createBook = async (req, res) => {
//   try {
//     const Book = await Book.create(req.body)
//     res.status(201).json({Book})
//   } catch (error) {
//   res.status(500).json({ msg: error })    
//   }
// }

const createBook = asyncWrapper( async (req, res) => {
  console.log('chegou!!!')
  const book = await Book.create(req.body)
  console.log('Book', book)
    res.status(201).json({book})
})

// Apenas a função de criar livros está pronta por enquanto

const getBook = asyncWrapper( async (req, res, next) => {
    // const book = await Book.findById({_id:req.params.id})
    const {id:bookId} = req.params
    const book = await Book.findById({_id:bookId})
    if(!book) {
      return next(createCustomError(`No Book with id: ${bookId}.`, 404))
      // const error = new Error('Not Found')
      // error.status = 404;
      // return next(error)
      // return res.status(404).json({msg: `No Book with id: ${bookId}.`})
    }
    res.status(200).json({book})
})

// const getBook = async (req, res) => {
//   try {
//     // const Book = await Book.findById({_id:req.params.id})
//     const {id:bookId} = req.params
//     const Book = await Book.findById({_id:bookId})
//     if(!Book) {
//       return res.status(404).json({msg: `No Book with id: ${bookId}.`})
//     }
//     res.status(200).json({Book})
//   } catch (error) {
//     res.status(500).json({ msg: error })    
//   }
// }


const deleteBook = asyncWrapper( async (req, res) => {
    const {id: bookId} = req.params;
    const Book = await Book.findOneAndDelete({_id: bookId})
    if(!Book) {
      return next(createCustomError(`No Book with id: ${bookId}.`, 404))
      // return res.status(404).json({msg: `No Book with id: ${bookId}.`})
    }
    res.status(200).json({Book})
    // res.status(200).send()
    // res.status(200).json({Book: null, status: 'success'})
})

// const deleteBook = async (req, res) => {
//   try {
//     const {id: bookId} = req.params;
//     const Book = await Book.findOneAndDelete({_id: bookId})
//     if(!Book) {
//       return res.status(404).json({msg: `No Book with id: ${bookId}.`})
//     }
//     res.status(200).json({Book})
//     // res.status(200).send()
//     // res.status(200).json({Book: null, status: 'success'})
//   } catch (error) {
//     res.status(500).json({ msg: error }) 
//   }
// }

const updateBook = asyncWrapper( async (req, res) => {
    const {id:bookId} = req.params
    const Book = await Book.findOneAndUpdate({_id:bookId}, req.body, {
      new: true,
      runValidators: true
    })

    if(!Book) {
      return next(createCustomError(`No Book with id: ${bookId}.`, 404))
      // return res.status(404).json({msg: `No Book with id: ${bookId}.`})
    }

    res.status(200).json({id: bookId, data: req.body})
})

// const updateBook = async (req, res) => {
//   try {
//     const {id:bookId} = req.params
//     const Book = await Book.findOneAndUpdate({_id:bookId}, req.body, {
//       new: true,
//       runValidators: true
//     })

//     if(!Book) {
//       return res.status(404).json({msg: `No Book with id: ${bookId}.`})
//     }

//     res.status(200).json({id: bookId, data: req.body})
//   } catch (error) {
//     res.status(500).json({ msg: error }) 
//   }
// }


module.exports = {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
}