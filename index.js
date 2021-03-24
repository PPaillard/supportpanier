function generateRandomId() {
  return Math.floor(Math.random() * Math.floor(10000));
}

class Article {
  constructor(description, prix, quantite) {
    this.id = generateRandomId();
    this.description = description;
    this.prix = prix;
    this.quantite = quantite;
  }
}

class Panier {
  constructor() {
    this.articles = [];
  }
  ajouterArticle(article) {
    this.articles.push(article);
  }
}

const monArticle = new Article("Je suis un super article", 9.9, 95);

const monPanier = new Panier();
monPanier.ajouterArticle(monArticle);

console.log(monPanier);
