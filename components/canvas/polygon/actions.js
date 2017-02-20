import { randomBetween } from '../../utils';

export const getDrawBorderSequence = (ctx, {width, height}) => {
  if (!width) return [];
  let y = height / 2;
  const initialAction = {
    coords: {
      width: 1,
      x: 0,
      y
    },
    id: Math.random(),
    color: '#ECECEC',
    type: 'line'
  };
  const sequence = [initialAction];
  const heightRange = [y-300, y+300];
  const widthRange = [40, 80];
  let x = 0;
  while (x < width) {
    y = randomBetween(...heightRange);
    const nextX = x + randomBetween(...widthRange);
    x = nextX > width ? width : nextX;
    // x += 20
    const coords = {
      ...initialAction.coords, x, y
    }
    sequence.push({
      ...initialAction, coords
    });
  }
  return sequence;
}