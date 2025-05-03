const Book = require('../models/Book');
//for getting all books
const getBooks = async(req,res)=>{
    try{
        const allBooks= await Book.find({});
        return res.status(200).json({
            count:allBooks.length,
            data:allBooks,
        });
    }catch(err){
            console.log(err.message);
            res.status(500).send({message:err.message})
    }
    
};

//for saving  one book
const saveBook = async(req,res)=>{
     try{
         
         if(!req.body.title||!req.body.author|| !req.body.publishYear){
            return res.status(400).send({message:'send all required field:title, author , publish year'});
         }
        
        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        };
        const book = Book.create(newBook)
         return res.status(201).send({message:book});
     }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
     }
};


//getting one book
const getBook = async(req,res)=>{
        try{
            const {id}=req.params;
            const getOneBook= await Book.findById(id);
            return res.status(200).json(getOneBook);
        }catch(err){
            console.log(err.message);
        }
}
//for updating the book
const updateBook = async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
          return  res.status(400).send({message:'send all required fields :title, author, publishYear'})
        }
        const{id}=req.params;
        let result = await Book.findByIdAndUpdate(id,req.body);
        if(!result)
            return res.status(404).json({message:"book not found"});
            return res.status(200).send({message:'book update sucessfully'});
    }catch(err){

    }
}
const deleteBook = async(req,res)=>{
    
    try{
        const{id}=req.params;
         const result = Book.findByIdAndDelete(id);
        if(!result)
            return res.status(404).send({message:'could not found book'});
            return res.status(200).send({message:'book deleted sucessfully'});
    }catch(err){
        console.log(err.message)
    }
}
module.exports= {getBooks,saveBook,getBook,updateBook,deleteBook}