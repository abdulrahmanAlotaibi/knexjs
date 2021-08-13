import * as Knex from "knex";

const connectionConfig: Knex.ConnectionConfig = {
  host: "127.0.0.1",

  user: "tms_user",
  password: "12345",
  database: "tms",
};

const poolConfig: Knex.PoolConfig = {
  min: 0,
  max: 1000,
};
const knex = require("knex")({
  client: "mysql",
  debug: true,
  connection: connectionConfig,
  pool: poolConfig,
});

const pingDB = async () => {
  try {
    const res = await knex.select().from("books").timeout(1000);
    console.log(res);
  } catch (error: any) {
    console.log(error);
  }
};

pingDB();
