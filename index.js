const chalk = require("chalk");
const { string, argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./note");
yargs.version("1.1.2");
// node index.js add --title="ajay" --body="ajay singh"
yargs
  .command(
    "add",
    "To add note",
    (yarg) => {
      yarg.options("title", {
        type: "string",
        demandOption: true,
        describe: "Title of the note.",
        // default: "title not defined",
      }),
        yarg.options("body", {
          type: "string",
          demandOption: true,
          describe: " Note body",
          default: "empty",
        });
    },
    (argv) => {
      notes.addNotes(argv.title, argv.body);
      console.log("note has been added!!", argv.title, argv.body);
    }
  )
  .help().argv;

// node index.js list
yargs.command("list", "To get the list of all tasks.", () => {
  const list = notes.loadNote();
  console.log(chalk.green("your notes are there"));
  list.forEach((note) => {
    debugger;
    console.log(chalk.gray(note.title));
  });
  console.log(chalk.green(list));
});

// node index.js read --title='aws'
yargs.command(
  "read",
  "To get the note, with specific title",
  (yarg) => {
    yarg.option("title", {
      type: string,
      describe: "title of the note",
      demandOption: true,
    });
  },
  (argv) => {
    notes.readNotes(argv.title);
  }
);

// node index.js remove --title="ajay"
yargs
  .command(
    "remove",
    "To remove a note from the note list",
    (yarg) => {
      yarg.options("title", {
        type: string,
        describe: "Based on title, note will delete.",
        demandOption: true,
      });
    },
    (argv) => {
      notes.removeNotes(argv.title);
    }
  )
  .help().argv;

// yargs
//   .command("delete", "Remove the notes.", function (argv) {
//     console.log("note has been removed!!");
//   })
//   .help().argv;
// yargs
//   .command("list", "Listed Out all the notes.", function (argv) {
//     console.log("listing the notes.");
//   })
//   .help().argv;
// yargs
//   .command("read", "Reading the notes.", function (argv) {
//     console.log("Reading the notes");
//   })
//   .help().argv;

//console.log(process.argv);
//console.log(yargs.argv);

/* yargs.argv    values { _: [ 'add' ], title: 'chat bot requirements', '$0': 'index.js' } */
