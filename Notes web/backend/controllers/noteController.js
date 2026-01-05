const Note = require("../models/Note");

const createNote = async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.create({ title, content });
  res.json(note);
};

const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};
const getNote = async (req,res)=>{

  const {id} = req.params;
  const note = await Note.findById(id);
  res.json(note);
}
const deleteNote = async (req,res)=>{

  const {id} = req.params;
  await Note.findByIdAndDelete(id);
  res.json({message:"Note deleted successfully"});
}
module.exports = { createNote, getNotes, getNote, deleteNote };