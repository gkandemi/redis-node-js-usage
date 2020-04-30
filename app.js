const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
  console.error(error);
});

// SET
client.set("user_name", "gokhan", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});
// GET
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// del
client.del("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Delete?", message);
});

// exists
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Exists", message);
});

client.append("last_name", "kandemir", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Append", message);
  client.get("last_name", (e, m) => {
    console.log("Okunan", m);
  });
});

client.on("message", (channel, message) => {
  console.log(`${channel} isimli kanala ${message} geldi..`);
});

client.subscribe("kablosuzkedi");
