const express=require('express')
const authorsRouter=express.Router();
function router(nav){
    var authors=[
        {
            name:'Joseph Barbera',
            nationality:'American',
            dob:'24 March 1911',
            img:"joseph.jpeg"
        },
        {
            name:'J. K. Rowling',
            nationality:'English',
            dob:'31 July 1965 ',
            img:"jk.jpeg"
        },
        {
            name:'Vaikom Muhammad Basheer',
            nationality:'Indian',
            dob:'21 January 1908',
            img:"basheer.jpeg"
        },
        {
            name:'Stephenie Meyer',
            nationality:'American',
            dob:'24 December 1973',
            img:"sm.jpeg"
        },
        {
            name:'Paulo Coelho',
            nationality:'Brazilian',
            dob:'24 August 1947',
            img:"Paulo Coelho.jpeg"
        }
    ]
    
    authorsRouter.get('/',function(req,res){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
    });
    // booksRouter.get('/single',function(req,res){
    //     res.send("hey i am a single book");
    // })
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("author",{
                nav,
                title:'Library',
                author:authors[id]
        });
    });
    return authorsRouter;
}

module.exports=router;