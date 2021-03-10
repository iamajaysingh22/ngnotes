# ngnotes

> It's the command line tool to write and read notes to JSON file.

# Statement

> Using this command-line tool, the User can add notes, list all their notes, search with the title of the note, and remove them from the JSON file.

### There are following commands are available to work with this tool.

1. node index.js add --title="morning task" --body="go for running" --> To add note with the title and body
2. node index.js list --> To list all their notes.
3. node index.js read --title='morning task' --> To list notes based on the title of the note
4. node index.js remove --title="morning Task" --> To remove the note based on the title

### List of all dependencies with version used in this project

- "chalk": "^4.1.0" --> used to beautifying the console.log message.
- "yargs": "^12.0.0" --> provides a set of features to make a command-line tool.

