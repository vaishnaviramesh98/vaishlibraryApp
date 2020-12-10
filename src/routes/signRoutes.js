const express=require('express')
const signRouter=express.Router();
function router(nav){
    // var authors=[
    //     {
    //         title:'tom and jerry',
    //         author:'joseph barbera',
    //         genre:'cartoon',
    //         img:"1.jpeg"
    //     },
    //     {
    //         title:'harry poter',
    //         author:'jk',
    //         genre:'fantasy',
    //         img:"l.jpeg"
    //     },
    //     {
    //         title:'fathooma',
    //         author:'basheer',
    //         genre:'drama',
    //         img:"m.jpeg"
    //     }
    // ]
    
    signRouter.get('/',function(req,res){
            res.render("signin",{
                nav,
                title:'Library',
                // authors
            });
    });
    // booksRouter.get('/single',function(req,res){
    //     res.send("hey i am a single book");
    // })
    // authorsRouter.get('/:id',function(req,res){
    //     const id=req.params.id;
    //     res.render("author",{
    //             nav,
    //             title:'Library',
    //             author:authors[id]
    //     });
    // });
    return signRouter;
}

module.exports=router;