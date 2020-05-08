class Entity {

  constructor(name) {
    this.name = name;
  }
}

class FootballСlub extends Entity {

  constructor(
    {
      name,
      footballСlubId,
      footballСlubMoney
    }
    ) {
    super(name);
    this.name = name;
    this.footballСlubMoney = footballСlubMoney;
    this.footballСlubId = footballСlubId;
  }
}

class Footballer extends Entity {

  constructor(name, nameId) {
    super(name);
    this.nameId = nameId;
  }
}

class Manager extends Entity {

  constructor(name) {
    super(name);
  }
}
