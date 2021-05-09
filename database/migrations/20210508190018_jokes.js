exports.up = function(knex) {
  return knex.schema.createTable("trolls", tbl => {
      tbl.increments();
      tbl.string("troll", 450).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trolls");
};
