const express = require('express');
const router = express.Router();

const { createNote, getNotes,getNote } = require('../controllers/noteController');

router.post('/',createNote);
router.get('/',getNotes);
router.get('/:id',getNote);
module.exports=router;