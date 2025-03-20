const ServicePerson = require("../src/services/person");
describe("RepositoryPerson Unit Test", () => {
  const service = new ServicePerson();

  it("should return all values in array", () => {
    const array = new Array("value1", "value2", "value3", "value4");
    const values = service.getAll();
    console.log(values);
    expect(values).toStrictEqual(array);
  });

  it("should return a value of array", () => {
    const array = new Array("value1", "value2", "value3", "value4");
    const index = 2;
    const value = service.get(index);
    expect(value).toBe(array[2]);
  });

  it("should adding a value in array", () => {
    const value = "other value";
    service.create(value);
    const values = service.getAll();

    console.log(values);
    expect(values[values.length - 1]).toBe(value);
  });

  it("should update a value in array", () => {
    const value = "other value";
    const index = 3;
    service.update(index, value);
    const allValues = service.getAll();
    console.log(allValues);

    expect(allValues[index]).toBe(value);
  });

  it("should delete a value in array", () => {
    const index = 4;
    service.delete(index);
    const value = service.get(index);
    console.log(value);

    expect(value).toBeUndefined();
  });
});
