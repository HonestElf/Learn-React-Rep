import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actions";
const initState = {
  isLoading: false,
  //   isLoaded: false,

  images: [],
  error: null,
};

const fn = (state = { initState }, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_SUCCESS:
      return { ...state, isLoading: false, images: action.payload };

    case FETCH_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default fn;
