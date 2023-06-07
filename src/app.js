const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon", "puedes"];
const ext = [".com", ".net", ".es", ".eu"];
const domain = [];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < ext.length; e++) {
        domain.push(pronoun[p] + adj[a] + ext[e]);
      }
    }
  }
}

console.log(domain);
