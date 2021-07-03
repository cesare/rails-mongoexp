db = db.getSiblingDB("mongoexp_development");
db.createUser({
  user: "mongoexp",
  pwd: "mongoexp",
  roles: ["readWrite"]
});

db = db.getSiblingDB("mongoexp_test");
db.createUser({
  user: "mongoexp",
  pwd: "mongoexp",
  roles: ["readWrite"]
});
