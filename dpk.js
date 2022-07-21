// const crypto = require("crypto");
import crypto from 'crypto';
import * as AppConstants from './AppConstants.js';

const generateHash = (data) => {
  if(data){
    return crypto.createHash(AppConstants.HASH_KEY).update(data).digest(AppConstants.ENCODING);
  }
  return null;
}

const assignCandidate = (event) => {
  let candidate, data;
  event ? (event.partitionKey ?  
    candidate = event?.partitionKey: (data = JSON.stringify(event), candidate = generateHash(data))): candidate = null
  return candidate;
}


const deterministicPartitionKey = (event) => {

  let candidate = assignCandidate(event);

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = AppConstants.TRIVIAL_PARTITION_KEY;
  }
  if (candidate?.length > AppConstants.MAX_PARTITION_KEY_LENGTH) {
    candidate = generateHash(data);
  }
  return candidate;
};

export default deterministicPartitionKey;