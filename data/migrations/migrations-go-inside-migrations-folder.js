exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.string('project_name', 128).notNullable();
      tbl.string('project_description', 128);
      tbl.boolean('project_completed').defaultTo(0);
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name', 128).unique().notNullable();
      tbl.string('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_description', 128).notNullable();
      tbl.string('task_notes', 128);
      tbl.boolean('task_completed').defaultTo(0);
      tbl.integer('project_id').notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE') // Set onDelete to CASCADE for onTruncate behavior
        .onUpdate('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};

