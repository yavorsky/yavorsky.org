import { randomBetween } from '../../../lib/utils';

export const getDrawBorderSequence = (ctx, {width, height}) => {
  if (!width) return [];
  let y = height / 2;
  const heightRangeMax = height / 2;
  const heightRange = [y - heightRangeMax, y + heightRangeMax];
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
  const widthRange = [40, 80];
  let x = 0;
  while (x < width) {
    y = randomBetween(...heightRange);
    const nextX = x + randomBetween(...widthRange);
    
    if (nextX > width) {
      x = width;
      y = height / 2;
    } else {
      x = nextX;
    }

    const coords = {
      ...initialAction.coords, x, y
    }
    sequence.push({
      ...initialAction, coords
    });
  }
  return sequence;
}