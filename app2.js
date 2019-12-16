console.log("Starting app2.js");

// const yargs = require("yargs");
const notes = require("./Notes");

const argv = process.argv;

const title = argv[4];
const body = argv[6];
const command = argv[2];

if (command === "add") {
  if (title && body) {
    console.log("adding note");
    notes.addingNote(title, body);
  } else {
    if (typeof title == "undefined") {
      console.log("title is missing");
    }
    if (typeof body == "undefined") {
      console.log("body is missing");
    }
    notes.help();
  }
} else if (command === "remove") {
  if (title) {
    console.log("removing note");
    notes.removeNote(title);
  } else {
    console.log("title is missing");
    notes.help();
  }
} else if (command === "read" && title) {
  if (title) {
    console.log("reading note");
    notes.readNote(title);
  } else {
    console.log("title is missing");
    notes.help();
  }
} else if (command === "list") {
  console.log("listing all notes");
  notes.GetAll();
} else if (command === "--help") {
  console.log("help");
  notes.help();
} else {
  notes.help();
}
