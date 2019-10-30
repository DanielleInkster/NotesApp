(function(exports) {
  function NotebookViewer(notebook = new Notebook) {
    this.notebook =  notebook
  }

  NotebookViewer.prototype.code = function(){
    var array = this.notebook.Notes.map(
      note => `<br><li><div>${note.read().substring(0, 19)}...</div></li><br>`
      );
      let code = array.join("");
      return "<ul>" + code + "</ul>";
    }


  exports.NotebookViewer = NotebookViewer;
})(this);