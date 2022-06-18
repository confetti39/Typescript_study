type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};
const playerMaker = (name: Name): Player => ({
  name,
});
const nico = playerMaker("nico");
nico.age = 12;
