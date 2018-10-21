var recipes = {Pizza:["Dough","Tomatoes","Cheese","Basil"];
  }
function updateObjectWithKeyAndValue(Pizza, key, value){
  return Object.assign({}, Pizza, {[key] : value})
}