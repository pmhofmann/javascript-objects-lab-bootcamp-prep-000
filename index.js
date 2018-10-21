var recipes = {Pizza:["Dough","Tomatoes","Cheese","Basil"];
  }
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object , {[key] : value})
}