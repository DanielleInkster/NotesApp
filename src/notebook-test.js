
var notebook = new Notebook();
var note = new Note()
function testNotebookforemptyArray() {
  assert.isTrue(notebook.Notes.length===0)
};

console.log('testNotebookforemptyArray')
console.log(testNotebookforemptyArray())

function testNotebookAddsNotes() {
  notebook.store(note)
  assert.isTrue(notebook.Notes.length===1)
};
console.log('testNotebookAddsNotes')
console.log(testNotebookAddsNotes())