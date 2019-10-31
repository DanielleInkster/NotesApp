(function(exports) {
  function NoteController(notebook = new Notebook) {
      this.notebook = notebook;
    }

    NoteController.prototype.showCode= function() {
      viewer = new NotebookViewer(this.notebook);
      document.getElementById("app").innerHTML = viewer.code();
    }

    NoteController.prototype.makeUrlChangeShowNoteForCurrentPage= function() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    };

    NoteController.prototype.showNoteForCurrentPage= function() {
      showNote(getNoteFromUrl(window.location.href));
    };

    NoteController.prototype.getNoteFromUrl= function(location) {
      return location.hash.split("#notes")[note.id];
    };

    NoteController.prototype.showNote= function(note = this.notebook.Notes[note.id]) {
      document
        .getElementById("app")
        .innerHTML = new SingleNote(note);
    };  
    
   exports.NoteController = NoteController;
})(this);