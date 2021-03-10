const yargs = require("yargs");
const chalk = require("chalk");

const notes = require("./note");

yargs.version("1.1.2");

/* node index.js add --title="morning task" --body="go for running"
 --> To add note with the title and body */
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
          describe: "Note body",
          default: "Not mentioned",
        });
    },
    ({ title, body }) => {
      notes.addNotes(title, body);
      console.log(chalk.cyan("Note has been added!!"));
      console.log("title : " + title);
      console.log("body : " + body);
    }
  )
  .help().argv;

/* node index.js list 
  --> To list all their notes. */
yargs.command("list", "To get the list of all tasks.", () => {
  const list = notes.loadNote();
  console.log(chalk.green("your notes are there"));
  list.forEach(({ title, body }) => {
    console.log(chalk.gray("title : " + title));
    console.log(chalk.gray("body : " + body));
  });
});

/* node index.js read --title='night task' 
--> To list notes based on the title of the note */

yargs.command(
  "read",
  "To get the note based on specific title",
  (yarg) => {
    yarg.option("title", {
      type: String,
      describe: "Title of the note",
      demandOption: true,
    });
  },
  ({ title }) => {
    notes.readNotes(title);
  }
);

/* node index.js remove --title="Evening Task" 
--> To remove the note based on the title */

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
