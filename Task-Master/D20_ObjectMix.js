/******** MINI FINAL TASK (Ultra Short) ********/

let key = "premium";

let base = {
  active: true,
  isActive(){return`active: ${this.active}`}
};


let user = {
  name: "Hassan",
  stats: { level: 7, score: 1200 },
  summary() { return `${this.name}, Level ${this.stats.level}`; }
};


user[key] = true;


let config = {
  lang: "EN",
  info() { return `Lang: ${this.lang}`; }
};


let status = Object.create(base);
status.active = false


let final = Object.assign(Object.create(base), user, config, status);

final.report = function () {
  return `
  User:${this.name}
  Level:${this.stats.level} 
  Premium:${this[key]}
  Active:${this.active}  `;
};

// TESTS
console.log(final.summary());
console.log(final.info());
console.log(final.isActive());
console.log(final.report());