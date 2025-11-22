// Liste des entités disponibles
export const entities = [
  {
    id: 1,
    name: "Informatique",
    description: "Département informatique",
    url: "/informatique"
  }
];

// Retourne toutes les entités
export function getEntities() {
  return entities;
}

// Retourne une entité par son identifiant ou son slug
export function getEntityById(id) {
  return entities.find((e) => e.id === id);
}
