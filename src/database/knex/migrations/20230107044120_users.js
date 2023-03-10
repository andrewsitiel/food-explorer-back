
exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id").notNullable();
  table.text("name");
  table.text("email");
  table.text("password");
  table.text("favorites_dishes_id");
  table.timestamp("created_at").default(knex.fn.now());
  table.boolean("admin").default(false);
});


exports.down = knex => knex.schema.dropTable("users");
