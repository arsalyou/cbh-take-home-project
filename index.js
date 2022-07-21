//const {deterministicPartitionKey} = require("./dpk");
import deterministicPartitionKey from './dpk.js';

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey(23));
console.log(deterministicPartitionKey('23'));
console.log(deterministicPartitionKey({partitionKey: 23}));
console.log(deterministicPartitionKey({partitionKey: '23'}));


