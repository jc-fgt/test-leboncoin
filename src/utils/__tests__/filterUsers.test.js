import { filterUser } from "../filterUsers"


describe("Utils function filterUser", () => {
  it('Should return a filtered user thanks its ID', () => {
    const users = [{ id: 1, nickname: "foo", token: "xxx" }, { id: 2, nickname: "bar", token: "xxx" }, { id: 3, nickname: "boo", token: "xxx" }, { id: 4, nickname: "far", token: "xxx" }]
    const expected = { id: 3, nickname: "boo", token: "xxx" }
    const filterdUser = filterUser(3, users);
    expect(filterdUser).toMatchObject(expected);
    expect(filterdUser).toEqual(expected)
  })
});