function temHabilidade(skills) {
  var retorno = (skills.indexOf("Javascript")!==-1) ? true : false
  console.log(retorno)
}
var skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade(skills); // true ou false
