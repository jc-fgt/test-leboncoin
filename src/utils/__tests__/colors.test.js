import { randomColor } from "../colors"


describe("Utils function randomColor", () => {
  it('Should return a color definition with a character', () => {
    const expected = { value: 'rgb(234, 11, 170, 0.5)', character: 'F' }
    const colorDefinition = randomColor("foo");
    expect(colorDefinition).toMatchObject(expected);
    expect(colorDefinition).toEqual(expected)
  })
});