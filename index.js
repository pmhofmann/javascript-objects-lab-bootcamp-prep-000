var recipes = {Pizza:["Dough","Tomatoes","Cheese","Basil"]
};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes , {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey