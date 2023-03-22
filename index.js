var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function (title, content) {
    };
    return Note;
}());
;
var NoteList = /** @class */ (function () {
    function NoteList() {
        this.notes = [];
    }
    NoteList.prototype.addNoteToList = function (note) {
        this.notes.push(note);
    };
    return NoteList;
}());
var note1 = new Note('Bài tập', 'Làm bài 1');
var note2 = new Note('Bài tập 2', 'Làm bài 2');
var noteList = new NoteList();
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);
console.log(noteList.notes);
