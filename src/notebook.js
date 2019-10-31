(function(exports) {

function Notebook(){
  this.Notes =[]
}


Notebook.prototype.store = function(note){
  this.Notes.push(note)
}

Notebook.prototype.showAllNotes = function(){
  var arrayLength = this.Notes.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(this.Notes[i])
}
}

Notebook.prototype.createNote = function(input){
    note = new Note
    note.addText(input);
    this.Notes.push( note)
    console.log(note)
  }
  
exports.Notebook = Notebook;
})(this);