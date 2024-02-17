import { createSlice } from "@reduxjs/toolkit";

// dummy notes
/*
[
    {
      title: "Meeting Agenda",
      body: "Discuss project milestones and assign tasks to team members.",
      owner: "John Doe",
      ownerId: "12345",
      color: "#806d00",
    },
    {
      title: "Grocery List",
      body: "Milk, eggs, bread, vegetables, and fruits.",
      owner: "Jane Smith",
      ownerId: "67890",
      color: "#00804b",
    },
    {
      title: "Book Recommendations",
      body: "Check out 'Sapiens' and 'The Power of Habit'.",
      owner: "Alex Johnson",
      ownerId: "54321",
      color: "#ffff00",
    },
    {
      title: "Fitness Goals",
      body: "Run 5 miles, do 50 push-ups, and 100 squats.",
      owner: "Emily Brown",
      ownerId: "98765",
      color: "#ffc0cb",
    },
    {
      title: "Project Ideas",
      body: "Brainstorm ideas for the upcoming app development project.",
      owner: "David Wilson",
      ownerId: "23456",
      color: "#add8e6",
    },
    {
      title: "Travel Plans",
      body: "Explore options for a weekend getaway.",
      owner: "Sophia Lee",
      ownerId: "87654",
      color: "#ccc",
    },
    {
      title: "Tech Conference",
      body: "Register for the upcoming technology conference.",
      owner: "Michael Miller",
      ownerId: "34567",
      color: "#00804b",
    },
    {
      title: "Recipe Ideas",
      body: "Experiment with new pasta recipes.",
      owner: "Olivia Taylor",
      ownerId: "78901",
      color: "#00804b",
    },
    {
      title: "Financial Goals",
      body: "Review and update monthly budget.",
      owner: "Daniel Davis",
      ownerId: "65432",
      color: "#00804b",
    },
    {
      title: "Art Project",
      body: "Sketch ideas for the next painting.",
      owner: "Ava Johnson",
      ownerId: "11223",
      color: "#00804b",
    },
  ]
*/
const initialState = {
  notes: [],
  currentNote: {},
  currentNoteTitle: null,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    getAllNotes: (state, action) => {
      state.notes = action.payload
    },
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.title === action.payload.title
          ? { ...note, ...action.payload }
          : note
      );
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.$id !== action.payload)
    },
    setCurrentNote: (state, action) => {
      state.currentNote = action.payload;
    },
    setCurrentNoteTitle: (state, action) => {
      state.currentNoteTitle = action.payload;
    },
  },
});

export const { getAllNotes, addNote, setCurrentNote, setCurrentNoteTitle, updateNote, deleteNote } =
  noteSlice.actions;
export default noteSlice.reducer;
