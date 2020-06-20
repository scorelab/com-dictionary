import * as actions from "../actions/actionTypes";

const initialState = {
  addWord: {
    loading: false,
    error: null,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_WORD_START:
      return {
        ...state,
        addItem: {
          ...state.addItem,
          loading: true,
        },
      };

    case actions.ADD_WORD_SUCCESS:
      return {
        ...state,
        addItem: {
          ...state.addItem,
          loading: false,
          error: false,
        },
      };

    case actions.ADD_WORD_ERROR:
      return {
        ...state,
        addItem: {
          ...state.addItem,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
