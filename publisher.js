const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
  console.error(error);
});

client.publish("kablosuzkedi", "app üzerinden gonderilen", (e, number) => {
  console.log(`Mesaj ${number} kişiye gonderildi`);
});
