class Note{
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    addNote(title: string, content: string){

    }
};

class NoteList{
    notes: Note[];
  
    constructor() {
      this.notes = [];
    }

  
    addNoteToList(note: Note): void {
      this.notes.push(note);
    }
}

const note1 = new Note('Bài tập', 'Làm bài 1');
const note2 = new Note('Bài tập 2', 'Làm bài 2');

const noteList = new NoteList();
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);

console.log(noteList.notes);