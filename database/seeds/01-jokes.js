exports.seed = function(knex){
    // Deletes all of the current entries
    return knex("trolls")
    .del()
    .then(function(){
        // Inserts the seeds to the Trolls db
        return knex("trolls").insert([
            {
                troll: "Head on over to https://www.twitch.tv/the_bearded_reaper_ -- Tell em the dude who should have a 4 Loko sponsorship sent ya."
            },
            {
                troll: "Head on over to https://www.twitch.tv/the_bearded_reaper_ -- Tell em the dude with the much better beard sent you!"
            },
            {
                troll: "Do you like Canadians? I'm sure you do and https://www.twitch.tv/the_bearded_reaper_ is a Canadian. If you want to see worse gun play, check him out and tell em that k0k0 sent ya."
            },
        ]);
    });
}