import TermekController from "./termekController";
import { expect, jest, test } from '@jest/globals';

const mockedModel = jest.mock('../models/termekModel');

test('a', async () => {
  const resultMock = {};

  mockedModel.getAll = jest
    .fn()
    .mockResolvedValue([{ id: 1, nev: 'Termék 1', ar: 1000, keszlet: 10 }]);

  await TermekController.getAll({ params: {} }, resultMock);
});