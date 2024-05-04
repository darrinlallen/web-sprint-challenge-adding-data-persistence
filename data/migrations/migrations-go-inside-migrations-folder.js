exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.string('project_name', 128).notNullable(); // Changed from required to notNullable
      tbl.string('project_description', 128);
      tbl.boolean('project_completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name', 128).unique().notNullable(); // Changed from required to notNullable and added unique constraint
      tbl.string('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_description', 128).notNullable(); // Changed from required to notNullable
      tbl.string('task_notes', 128);
      tbl.boolean('task_completed').defaultTo(false);
      tbl.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    });
};

exports.down = function (knex) {
  // Drop in the opposite order
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
