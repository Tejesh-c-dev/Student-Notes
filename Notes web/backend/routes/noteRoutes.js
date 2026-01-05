const express = require('express');
const router = express.Router();

const { createNote, getNotes,getNote ,deleteNote } = require('../controllers/noteController');

router.post('/',createNote);
router.get('/',getNotes);
router.get('/:id',getNote);
router.delete('/:id',deleteNote);
module.exports=router;