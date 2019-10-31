(function(exports) {
function Note() {
  this.id = ID.generate()
  this.date = this.todaysDate()
  this.text = 'My favorite language is Javascript'
}

Note.prototype.todaysDate = function(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
return today
}

Note.prototype.addText = function(input){
  this.text = input
}

Note.prototype.read = function(){
  return this.text;
}
exports.Note = Note;
})(this);




