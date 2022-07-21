import deterministicPartitionKey from './dpk.js';

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given 23 as int input", () => {
    const trivialKey = deterministicPartitionKey(23);
    expect(trivialKey).toBe("4f1466999e95b9767883209830ab4e0ab1cf70cd0fc8d18a24ee45ebf9c9cfe691808dcfe3fc1b2efe557a243303960c73f9825ad72f85a3312271b3fd64f7b6");
  });

  it("Returns the literal 'da2ed7fbd0de049a394306e32a5b973fbef359f216b72e80ba5e2b41da3e13e25d9414848cc21aba614062deab238576a21fcc66a8196cc1b561d062e3dbfb9a' when given 23 as string input", () => {
    const trivialKey = deterministicPartitionKey('23');
    expect(trivialKey).toBe("da2ed7fbd0de049a394306e32a5b973fbef359f216b72e80ba5e2b41da3e13e25d9414848cc21aba614062deab238576a21fcc66a8196cc1b561d062e3dbfb9a");
  });

  it("Returns the literal '23' when given {partitionKey: 23} as input", () => {
    const trivialKey = deterministicPartitionKey(23);
    expect(trivialKey).toBe("23");
  });

  it("Returns the literal '23' when given {partitionKey: '23'} as input", () => {
    const trivialKey = deterministicPartitionKey(23);
    expect(trivialKey).toBe("23");
  });


});


