const express=require('express');
const booksRouter=express.Router();
function Router(nav){
books=[
    {
        title:"Song Of Ice n Fire",
        genre:"Fantasy",
        author:"George R.R. Martin"
    } ,

    {
        title:"Harry Potter",
        genre:"Fantasy",
        author:"J.K. Rowling"
    },

    {
        title:"Half Girlfriend",
        genre:"Romance",
        author:"Chetan Bhagat"
       
    },


    {
        title:"Theory Of Everthng",
        genre:"Science",
        author:"Stephen Hawkins"
    },


    {
         title:"Les Miserables",
        genre:"Historical Fiction",
        author:"Victor Hugo"
        
    }

]
booksRouter.route('/')
.get((req,res)=>{
    res.render('books',{
        nav:[
            {
                    link:'/books',
                    title:'books'
            },
            {
                    link:'/authors',
                    title:'Authors'
            }
            ],
            title:'library',
            books
        }
    );
});
booksRouter.route('/:id')
.get((req,res)=>{
    const id=req.param.id;
    res.render('book',{
        nav:[
            {
                    link:'/books',
                    title:'books'
            },
            {
                    link:'/authors',
                    title:'Authers'
            }
            ],
        title:"library",
        book:books[id]
        }
    );
});
    return booksRouter;
}
module.exports=Router;