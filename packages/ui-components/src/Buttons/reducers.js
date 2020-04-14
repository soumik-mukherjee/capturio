export function toogleButtonReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_BUTTON_SELECTION":
      let _fg = state.fg;
      return {
        ...state,
        isSelected: !state.isSelected,
        fg: state.bg,
        bg: _fg,
      };
    default:
      return state;
  }
}
