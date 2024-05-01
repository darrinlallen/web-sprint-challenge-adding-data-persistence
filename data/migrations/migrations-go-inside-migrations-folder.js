
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id').primary();
      tbl.string('project_name', 128).required;
      tbl.string('project_description', 128);
      tbl.boolean('project_completed').defaultTo(0);
    })
    // we can chain together createTable
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name', 128).unique().required;
      tbl.string('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_description', 128).required;
    tbl.string('task_notes', 128).required;
    tbl.boolean('task_completed').defaultTo(0);
     tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
    
};

exports.down = function (knex) {
  // drop in the opposite order
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
