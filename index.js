var recipes = {Pizza:["Dough","Tomatoes","Cheese","Basil"]
}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes , {[key] : value});
}