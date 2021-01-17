import ShowProfileTypes from "./profile.types";

export const addProfile = (profile) => ({
  type: ShowProfileTypes.SHOW_PROFILE,
  payload: profile,
});
