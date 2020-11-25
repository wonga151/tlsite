import { TOGGLE_THEME } from '../actions/actionTypes'
const initialState = {
  isThemeLight: true,
};

export default function (state = initialState, action) {
  console.log("theme reducer")

  switch (action.type) {
    case TOGGLE_THEME: {
      console.log("Toggling theme")
      console.log(state.isThemeLight)

      console.log("TO")
      console.log(!state.isThemeLight)
      return {
        ...state,
        isThemeLight: !state.isThemeLight
      };
    }
    default:
      return state;
  }
}
