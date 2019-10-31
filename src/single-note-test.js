
var notebook = new Notebook();
notebook.createNote("HI!","Still a note")
var singlenote = new SingleNote(note)


function testSingleNoteViewerDisplays() {
  assert.isTrue(singlenote.showOne()==='<div>HI! Still a note</div>')
};

console.log('testSingleNoteViewerDisplays')
console.log(testSingleNoteViewerDisplays())