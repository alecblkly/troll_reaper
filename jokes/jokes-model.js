const db = require("../database/dbConfig");

function find(){
    return db("trolls").select("id", "troll")
}

function findById(id){
    return db("trolls")
    .select("id", "troll")
    .orderBy("id")
    .where({ id })
    .first();
}

function add(troll){
    return db("trolls")
    .insert(troll, "id")
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });
}

function remove(id){
    return db("trolls")
    .where({ id })
    .del();
}

function update(changes, id){
    return db("trolls")
    .where({ id })
    .update(changes);
}

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}