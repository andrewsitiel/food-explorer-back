exports.up = knex => knex.schema.createTable("orders", table => {
  table.text("id").primary();
  table.text("status");
  table.text("description");
  table.timestamp("created_at").default(knex.fn.now());
  table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("orders");
