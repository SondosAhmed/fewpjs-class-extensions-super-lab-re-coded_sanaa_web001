// Write your classes here
class Tree{
  constructor(species){
    this.species=species;
  }
}
class Deciduous extends Tree{
  constructor(species, name){
    super(species);
    this.name=name;
  }

}
class Evergreen extends Tree{
  constructor(species, name){
    super(species);
    this.name=name;
  }
}
