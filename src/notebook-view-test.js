
var notebook = new Notebook();
var notebookviewer = new NotebookViewer(notebook)
notebook.createNote("HI!","I'm an extremely long and verbose note")

function testNotebookViewerOutputsHTMLNotesof20Chars() {
  assert.isTrue(notebookviewer.code()==="<ul><br><li><div>HI! I'm an extremel...</div></li><br></ul>")
};
console.log('testNotebookViewerOutputsHTMLNotesof20Chars')
console.log(testNotebookViewerOutputsHTMLNotesof20Chars())
