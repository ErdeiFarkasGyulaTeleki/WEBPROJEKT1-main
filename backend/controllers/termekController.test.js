import { expect, jest, test } from '@jest/globals';

const termekModelMock = {
  getAll: jest.fn(),
  getById: jest.fn(),
  create: jest.fn()
};

jest.unstable_mockModule('../models/termekModel.js', () => ({
  default: termekModelMock
}));

const { default: TermekController } = await import('./termekController.js');

const createResponse = () => {
  const res = {
    status: jest.fn(),
    json: jest.fn()
  };

  res.status.mockReturnValue(res);
  res.json.mockReturnValue(res);

  return res;
}

test('Sample test case', async () => {
  const products = [{ id: 1, nev: "Keyboard" }];
  termekModelMock.getAll.mockResolvedValue(products);

  const res = createResponse();

  const result = await TermekController.getAll({ params: {} }, res);

  expect(result).toBeUndefined();
});