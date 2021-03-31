export function loadingReducer(state = { loading: false}, action: any) {
  const { type } = action;

  const matches = /(.*)_API_(REQUEST|SUCCESS|ERROR)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, , requestState] = matches;
  return {
    ...state,
    loading: requestState === "REQUEST",
  };
}
