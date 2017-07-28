import * as actionTypes from '../actions/actionTypes';

const initalState = {
  items: [],
  itemUpdate: null,
  isFetching: false,
  isCreateMode: true,
  isUpdateMode: false,
  isDeleted: false,
  isCreating: false,
};


export default (state = initalState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_LOCATIONS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case actionTypes.FETCH_LOCATIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case actionTypes.ADD_LOCATION:
      if (state.items.map(item => item.id).includes(action.payload.id)) {
        return Object.assign({}, state, {
          items: [...state.items, action.payload],
        });
      }
      return Object.assign({}, state, {
        items: [...state.items, action.payload],
      });
    case actionTypes.SAVE_LOCATION_PENDING:
      return Object.assign({}, state, {
        isCreateMode: false,
        isCreating: true,
      });
    case actionTypes.SAVE_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        isCreating: false,
        isCreateMode: true,
      });
    case actionTypes.EDIT_LOCATION:
      return Object.assign({}, state, {
        items: [
          ...state.items.filter(location => location.id !== action.payload.id),
          Object.assign({}, action.payload),
        ],
      });
    case actionTypes.REMOVE_LOCATION:
      return Object.assign({}, state, {
        items: state.items.filter(location => location.id !== action.payload),
      });
    case actionTypes.UPDATE_MODE_EDIT:
      return Object.assign({}, state, {
        isUpdateMode: true,
        isCreateMode: false,
        itemUpdate: action.payload,
      });
    case actionTypes.RESET_METADATA:
      return Object.assign({}, state, {
        itemUpdate: null,
        isFetching: false,
        isCreateMode: true,
        isCreating: false,
        isUpdateMode: false,
        isDeleted: false,
      });
    default:
      return state;
  }
};
