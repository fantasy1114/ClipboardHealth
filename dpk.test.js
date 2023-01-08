const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the partition key", () => {
    const event = { partitionKey : "1"}; 
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the stringified partition key when passing non-string", () => {
    const event = { partitionKey : 1}; 
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("1");
  });
});
