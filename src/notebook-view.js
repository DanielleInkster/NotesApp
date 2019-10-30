(function(exports) {
  function NotebookList(notebook = new Notebook) {
    this.notebook =  notebook
  }

  NotebookList.prototype.code = function(){
    var array = this.notebook.Notes.map(
      note => `<br><li><div>${note.read().substring(0, 19)}...</div></li><br>`
      );
      let code = array.join("");
      return "<ul>" + code + "</ul>";
    }


  exports.NotebookList = NotebookList;
})(this);