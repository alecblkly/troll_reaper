exports.seed = function(knex){
    // Deletes all of the current entries
    return knex("trolls")
    .del()
    .then(function(){
        // Inserts the seeds to the Trolls db
        return knex("trolls").insert([
            {
                troll: "This is troll 1"
            },
            {
                troll: "This is troll 2"
            },
            {
                troll: "This is troll 3"
            },
            {
                troll: "This is troll 4"
            },
            {
                troll: "This is troll 5"
            },
        ]);
    });
}