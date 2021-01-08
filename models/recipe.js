const db = require('../data/config');

function find() {
	return db('recipe')
}

function findById(id) {
	return db('recipe')
		.where('id', id)
		.first()
}

function getShoppingList(id) {
    return db('recipe_ingredient as ri')
        .innerJoin('recipe as r', 'ri.recipe_id', 'r.id')
        .innerJoin('ingredients as i', 'ri.ingredient_id', 'i.id')
        .where('r.id', id)
        .select('i.id', 'r.name', 'i.ingredient_name')
}

function getInstructions(id) {
    return db('directions as d')
        .where('d.id', id)
        .leftJoin('recipe as r', 'r.id', 'd.recipe_id')
        .first('r.name as recipe', 'd.id as direction_id', 'd.direction')
}

module.exports = {
	find,
    findById,
    getShoppingList,
    getInstructions,
}