
var notebook = new Notebook();
var notebookviewer = new NotebookViewer(notebook)
notebook.createNote("I'm an extremely long and verbose note")

function testNotebookViewerOutputsHTMLNotesof20Chars() {
  assert.isTrue(notebookviewer.code()==="<ul><br><a href='#notes/4'><li><div>I'm an extremely lo...</div></li></a><br></ul>")
};
console.log('testNotebookViewerOutputsHTMLNotesof20Chars')
console.log(notebookviewer.code())
// console.log(testNotebookViewerOutputsHTMLNotesof20Chars())

