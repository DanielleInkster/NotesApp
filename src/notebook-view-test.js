
var notebook = new Notebook();
var notebookviewer = new NotebookViewer(notebook)
notebook.createNote("HI!","Still a note")

function testNotebookViewerOutputsHTMLNotes() {
  assert.isTrue(notebookviewer.code()==='<ul><br><li><div>Still a note...</div></li><br></ul>')
};
console.log('testNotebookViewerOutputsHTMLNotes')
console.log(testNotebookViewerOutputsHTMLNotes())