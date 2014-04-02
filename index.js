module.exports = function(n){
  n = n || 6;
  //if (!n.toFixed) return?;
  return Math.random().toString(16).slice(2, n+2);
}