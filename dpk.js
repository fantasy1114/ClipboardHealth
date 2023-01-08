const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_KEY_LENGTH = 256;
  let candidate = "0";

  if (event) {
    candidate = event.partitionKey ?? createHash(JSON.stringify(event));
    if (typeof candidate !== "string"){
      candidate = JSON.stringify(candidate);
    }
  }

  return candidate.length > MAX_KEY_LENGTH ? createHash(candidate) : candidate; 
};

function createHash(input){
  return crypto.createHash("sha3-512").update(input).digest("hex");
}


  // const crypto = require("crypto");

  // exports.deterministicPartitionKey = (event) => {
  //   const TRIVIAL_PARTITION_KEY = "0";
  //remove one constant as it is equivalent to the default value of candidate
  //   const MAX_PARTITION_KEY_LENGTH = 256;
  //   let candidate;
  //set default value for candidate

  //   if (event) {
  //     if (event.partitionKey) {
  //       candidate = event.partitionKey;
  //     } else {
  //       const data = JSON.stringify(event);
  //       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  //     }
  //   }
  
  //   if (candidate) {
  //     if (typeof candidate !== "string") {
  //       candidate = JSON.stringify(candidate);
  //     }
  //   } else {
  //     candidate = TRIVIAL_PARTITION_KEY;
  //   }
  //   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
  //     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  //   }
  //   return candidate;
  // };