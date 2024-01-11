import { formatedDateFromTimestamp } from "../dates"


describe("Utils function formatedDateFromTimestamp", () => {
  it('Should return a formated date from a timestamp', () => {
    const expected = "10 janv."
    const formatedDate = formatedDateFromTimestamp(1704882743401);
    expect(formatedDate).toEqual(expected)
  })
});