const fs = require("fs");
function fetchNotes() {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
}
function addingNote(title, body) {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var double = notes.filter(note => note.title === title);
  if (double.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNote(note);
  } else {
    console.log("STOP:Title already existes.");
  }
}

function removeNote(title) {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}
function readNote(title) {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title === title);
  //   console.log(`title: $(filteredNotes[0].title) body:$(filteredNotes[0].body `);
  logNote(filteredNotes[0]);
}

function GetAll() {
  var notes = fetchNotes();
  //   console.log(notes);
  notes.forEach(note => logNote(note));
}

function logNote({ title, body } = note) {
  console.log("************************************");
  console.log("Title:", title);
  console.log("Body: ", body);
}
function help() {
  console.log("help");
  console.log("error");
}

module.exports = {
  addingNote,
  removeNote,
  readNote,
  GetAll,
  help
};
