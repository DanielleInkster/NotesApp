function Note() {
  this.date = this.todaysDate()
  this.title = 'Languages'
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

Note.prototype.addTitle = function(title){
  this.title = title;
}

Note.prototype.createNote = function(title,input){
  this.todaysDate();
  this.addTitle(title);
  this.addText(input);
}
  
Note.prototype.store = function(note){
this.notebook.notes.push(note)
}


