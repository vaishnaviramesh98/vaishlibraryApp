const express=require('express')
const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"tom.jpeg"
        },
        {
            title:'Harry Potter',
            author:'J. K. Rowling',
            genre:'Fantasy',
            img:"harry.jpeg"
        },
        {
            title:'Pathummayude Aadu',
            author:'Vaikom Muhammad Basheer',
            genre:'Drama',
            img:"paathu.jpeg"
        },
        {
            title:'Twilight',
            author:'Stephenie Meyer',
            genre:'Fantasy Fiction',
            img:"tw.jpeg"
        },
        {
            title:'The Alchemist',
            author:'Paulo Coelho',
            genre:'Novel',
            img:"al.jpeg"
        }
    ]
    
    booksRouter.get('/',function(req,res){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
    });
    // booksRouter.get('/single',function(req,res){
    //     res.send("hey i am a single book");
    // })
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",{
                nav,
                title:'Library',
                book:books[id]
        });
    });
    return booksRouter;
}

module.exports=router;