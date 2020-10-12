/*
    {
        notes:[],
        selected: {
            id:23g15kj1g23khwebsw,
            title:'',
            body:'',
            imageURL: '',
            date: 16239810283,
        } || null
    }
 */

import { TYPES } from "../../types/types";

const initialState = {
  notes: [],
  selected: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.notesSelect:
      return {
        ...state,
        selected: {
          ...action.payload,
        },
      };
    case TYPES.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case TYPES.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case TYPES.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...action.payload.note, id: note.id }
            : note
        ),
      };
    case TYPES.notesDelete:
      return {
        ...state,
        selected: null,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case TYPES.notesLogoutCleaning:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
