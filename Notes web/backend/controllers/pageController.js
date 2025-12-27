const home = (req, res) => {
    res.send("Home Page");
  };
  
  
  const notes = (req, res) => {
    res.send("Student Notes Page");
  };
  
  const quiz = (req, res) => {
    res.send("Quiz Page");
  };
  
  const pyqs = (req, res) => {
    res.send("Previous Year Question Papers Page");
  };
  
  module.exports = { home, notes, quiz, pyqs };
  