(function(exports) {
  function SingleNote(note = new Note){
    this.note = note
  }

  SingleNote.prototype.showOne = function(){
    return '<div>'+this.note.text+'</div>'
  }
  exports.SingleNote = SingleNote;
})(this);