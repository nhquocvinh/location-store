import * as actionTypes from '../actions/actionTypes';

const initalState = {
  items: [],
  itemUpdate: {
    longitude: null,
    latitude: null,
    street: null,
    country: null,
    city: null,
    district: null,
    ward: null,
    id: null,
  },
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
        const newState = state.items;
        for (let index = 0; index < newState.length; index += 1) {
          if (newState[index].id === action.payload.id) {
            newState[index] = action.payload;
          }
        }

        return Object.assign({}, state, {
          items: [...newState],
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
        isCreateMode: false,
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
        itemUpdate: Object.assign({}, state.itemUpdate, {
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
          street: action.payload.street,
          country: action.payload.country,
          city: action.payload.city,
          district: action.payload.district,
          ward: action.payload.ward,
          id: action.payload.id,
        }),
      });
    case actionTypes.UPDATE_POSITION_ON_MAP:
      return Object.assign({}, state, {
        itemUpdate: Object.assign({}, state.itemUpdate, {
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
          street: action.payload.street,
          country: action.payload.country,
          city: action.payload.city,
          district: action.payload.district,
          ward: action.payload.ward,
          id: action.payload.id,
        }),
      });
    case actionTypes.OPEN_CREATE_FORM:
      return Object.assign({}, state, {
        itemUpdate: Object.assign({}, state.itemUpdate, {
          longitude: null,
          latitude: null,
          street: null,
          country: null,
          city: null,
          district: null,
          ward: null,
          id: null,
        }),
        isFetching: false,
        isCreateMode: true,
        isCreating: false,
        isUpdateMode: false,
        isDeleted: false,
      });
    case actionTypes.RESET_METADATA:
      return Object.assign({}, state, {
        itemUpdate: Object.assign({}, state.itemUpdate, {
          longitude: null,
          latitude: null,
          street: null,
          country: null,
          city: null,
          district: null,
          ward: null,
          id: null,
        }),
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
