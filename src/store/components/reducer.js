import * as actions from "./actions";

const initialState = {
  currentlyEdited: null,
  items: [],
};

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_COMPONENT:
      return {
        ...state,
        items: [...state.items, { id: action.id, layout: action.layout, values: {} }],
        currentlyEdited: { id: action.id, layout: action.layout, values: {} },
      };
    case actions.UPDATE_COMPONENT: 
      return {
        ...state,
        items: state.items.map((item) => item.id === action.id ? { ...item, ...action.data } : item),
        currentlyEdited: null,
      };
    case actions.REMOVE_COMPONENT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
        currentlyEdited: null,
      };
    case actions.SET_EDITED_COMPONENT:
      return {
        ...state,
        currentlyEdited: state.items.find((item) => item.id === action.component.id),
      };
    default:
      return state;
  }
};

export { initialState, componentsReducer };
