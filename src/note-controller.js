(function(exports) {
  function NoteController(notebook = new Notebook) {
      this.notebook = notebook;
    }

    NoteController.prototype.showCode= function() {
      viewer = new NotebookViewer(this.notebook);
      document.getElementById("app").innerHTML = viewer.code();
    }
   exports.NoteController = NoteController;
})(this);