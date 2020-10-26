const express = require('express');

const { redirectMiddleware } = require('../../middleware');
const { getAdditionalData } = require('../../utils');
const { Post, Admin } = require('../../models');

const router = express.Router();

router.get('/contents',redirectMiddleware, async (req, res) =>{
    const { user } = res.locals;

    const posts = await Post.find({}).select('-__v');
    console.log(posts)

    const promises = await Promise.all(posts.map(async el =>{
        return {
            judul: el.judul,
            content: el.content,
            author: await getAdditionalData(el.author, Admin),
            createdAt: el.createdAt
        }
    }))

    const data = {
        posts: promises,
        user,
    
    }
    console.log(data);
    res.render('listContent', data ); // render untuk menampilkan 
});

module.exports = router;