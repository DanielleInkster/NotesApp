var note = new Note();

function testNotefortextcontent() {
  assert.isTrue(note.text === 'My favorite language is Javascript');
};

console.log('testNotefortextcontent')
console.log(testNotefortextcontent())

function testTextCanBeViewed() {
  assert.isTrue(note.read() === 'My favorite language is Javascript');
};
console.log('testTextCanBeViewed')
console.log(testTextCanBeViewed())

function testNoteTextCanBeChanged() {
  note.addText("I'm a new note!")
  assert.isTrue(note.text === "I'm a new note!");
};
console.log('testNoteTextCanBeChanged')
console.log(testNoteTextCanBeChanged())


function testNoteforDate() {
  assert.isTrue(note.date === note.todaysDate());
};
console.log('testNoteforDate')
console.log('The date is ' + note.date)
console.log(testNoteforDate())

function testNoteforTitle() {
  assert.isTrue(note.title === 'Languages');
};
console.log('testNoteforTitle')
console.log(testNoteforTitle())

function testTitleCanBeChanged() {
  note.addTitle("Hello")
  assert.isTrue(note.title === 'Hello');
};
console.log('testTitleCanBeChanged')
console.log(testTitleCanBeChanged())

// function testNewNoteIsCreated() {
//   note.createNote("Hello","I'm a second note")
//   assert.isTrue(note.title === 'Hello');
//   assert.isTrue(note.text === "I'm a second note");
// };
// console.log('testNewNoteIsCreated')
// console.log(testNewNoteIsCreated())



