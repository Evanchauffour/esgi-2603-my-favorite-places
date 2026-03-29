import {expect, test} from '@jest/globals';
import { getDistance } from '../utils/getDistance';


test('calcule la distance Paris–Lyon', () => {
  const paris = { lat: 48.8566, lng: 2.3522 };
  const lyon = { lat: 45.7640, lng: 4.8357 };

  expect(getDistance(paris, lyon)).toBeCloseTo(391, 0);
});
