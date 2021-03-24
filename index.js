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
    this.total = 0;
    this.articles = [];
  }
  // Fonction permettant d'ajouter un article au panier
  ajouterArticle(article) {
    this.articles.push(article);
  }
  // Fonction permettant de supprimer un article du panier
  supprimerArticle(article) {
    for (let i = 0; i < this.articles.length; i++) {
      if (this.articles[i].id === article.id) {
        this.articles.splice(i, 1);
      }
    }
  }
  // met à jour le prix total du panier
  mettreAJourTotal() {
    this.total = 0;
    // Pour chaque article de mon panier
    for (let i = 0; i < this.articles.length; i++) {
      // je multiplie la quantité de l'article indiqué par son prix
      this.total += this.articles[i].prix * this.articles[i].quantite;
    }
  }
}
// je créé mes articles
const veste = new Article("Veste moumoute", 25, 3);
const tshirt = new Article("T-Shirt de Superman", 9.9, 1);
const airMax = new Article("Air Max classic", 130, 2);

// Je créé mon panier et j'y ajoute mes articles
const monPanier = new Panier();
monPanier.ajouterArticle(veste);
monPanier.ajouterArticle(tshirt);
monPanier.ajouterArticle(airMax);

// je supprime un article de mon panier
monPanier.supprimerArticle(veste);

// calcul & affichage du total
monPanier.mettreAJourTotal();
console.log(monPanier.total);
