exports.up = function(knex) {
  return knex.schema.createTable("trolls", tbl => {
      tbl.increments();
      tbl.string("troll").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trolls");
};
