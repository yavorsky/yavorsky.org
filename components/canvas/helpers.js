export const repeatAction = (action, times) => {
  const actions = [];
  for (let i = 0; i <= times; i++) {
    actions.push(action);
  }
  return actions;
};