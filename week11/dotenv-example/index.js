import "dotenv/config";

// These are the env variables that we add
// DB_USERNAME
// DB_PASSWORD
// DB_CONNECTION_STRING
// PORT
// BASE_API_URL
// S3_BUCKET
// SECRET_KEY

//console.log("all env variables", process.env);

// grab the dbusername to use it in a variable

const db_user = process.env.DB_USERNAME;
console.log(db_user);

// log it out directly

console.log("s3 bucket: ", process.env.S3_BUCKET);
