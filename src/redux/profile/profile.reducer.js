import ShowProfileTypes from "./profile.types";

const INITIAL_STATE = {
  profileUpdate: null,
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShowProfileTypes.SHOW_PROFILE:
      return {
        ...state,
        profileUpdate: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
