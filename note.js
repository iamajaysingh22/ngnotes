const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

addNotes = (title, body) => {
  let notes = loadNote();
  const dublicateTitle = notes.filter((note) => {
    return note.title === title;
  });

  if (dublicateTitle.length === 0) {
    let newNote = {
      title: title,
      body: body,
    };
    notes.push(newNote);
    saveNote(notes);
    console.log("Note has been Added!", notes);
  } else {
    console.log("Already exist note with same title.");
  }
};

readNotes = (title) => {
  debugger;
  const notes = loadNote();
  const note = notes.find((notes) => notes.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
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
    console.log(chalk.green.inverse("Note with title was not found!!"));
  }
};

loadNote = () => {
  try {
    const buffer = fs.readFileSync("note.json");
    const note = buffer.toString();
    return JSON.parse(note);
  } catch (e) {
    return [];
  }
};

saveNote = (notes) => {
  notes = JSON.stringify(notes);
  fs.writeFileSync("note.json", notes);
};
module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  readNotes: readNotes,
  loadNote: loadNote,
};
