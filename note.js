const fs = require("fs");
const chalk = require("chalk");

addNotes = (title, body) => {
  let notes = loadNote();
  const dublicateTitle = notes.filter((note) => {
    return note.title === title;
  });

  if (dublicateTitle.length === 0) {
    let newNote = {
      title,
      body,
    };
    notes.push(newNote);
    saveNote(notes);
    console.log(
      chalk.green.inverse("Note has been Added Successfully."),
      notes
    );
  } else {
    console.log(chalk.redBright("Note Already exist with same title."));
  }
};

readNotes = (title) => {
  const notes = loadNote();
  const note = notes.find((notes) => notes.title === title);
  if (note) {
    console.log(chalk.green.inverse("Note details"));
    console.log(chalk.cyan("title : " + note.title));
    console.log(chalk.cyan("body : " + note.body));
  } else {
    console.log(chalk.red.inverse("Note was not found!"));
  }
};
removeNotes = (title) => {
  console.log(title);
  let notes = this.loadNote();
  let notesKeep = notes.filter((note) => {
    return note.title !== title;
  });
  if (notesKeep.length < notes.length) {
    saveNote(notesKeep);
    console.log(chalk.green.inverse("Note removed!!"));
  } else {
    console.log(chalk.red.inverse("Note with title was not found!!"));
  }
};
// Fetch the list note from the note.json
loadNote = () => {
  try {
    const buffer = fs.readFileSync("note.json");
    const note = buffer.toString();
    return JSON.parse(note);
  } catch (e) {
    return [];
  }
};
// save note into the note.json file
saveNote = (notes) => {
  notes = JSON.stringify(notes);
  fs.writeFileSync("note.json", notes);
};
// ECMA6 new object property pinding
module.exports = {
  addNotes,
  removeNotes,
  readNotes,
  loadNote,
};
