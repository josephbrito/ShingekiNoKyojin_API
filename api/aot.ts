import { photos } from "../photos";

interface IApi {
  id: number;
  name: string;
  titan?: string[];
  age: number | "?";
  photo: string;
}

export const Characters: IApi[] = [
  {
    id: 1,
    name: "Eren Yaeger",
    titan: ["Titã de ataque", "Titã fundador", "Titã martelo de guerra"],
    age: 19,
    photo: photos.character.eren,
  },

  {
    id: 2,
    name: "Mikasa Ackerman",
    age: 19,
    photo: photos.character.mikasa,
  },

  {
    id: 3,
    name: "Armin Arlet",
    titan: ["Titã colossal"],
    age: 19,
    photo: photos.character.armin,
  },

  {
    id: 4,
    name: "Levi Ackerman",
    age: 30,
    photo: photos.character.levi,
  },

  {
    id: 5,
    name: "Reiner Braun",
    titan: ["Titã blindado"],
    age: 21,
    photo: photos.character.reiner,
  },

  {
    id: 6,
    name: "Bertolt Hoover",
    age: 21,
    photo: photos.character.bertolt,
  },

  {
    id: 7,
    name: "Annie Leonhart",
    titan: ["Titã femêa"],
    age: 20,
    photo: photos.character.annie,
  },

  {
    id: 8,
    name: "Ymir",
    titan: ["Titã mandibula"],
    age: 75,
    photo: photos.character.ymir,
  },

  {
    id: 9,
    name: "Porco Galliard",
    titan: ["Titã mandibula"],
    age: "?",
    photo: photos.character.porco,
  },

  {
    id: 10,
    name: "Marcel Galliard",
    titan: ["titã mandibula"],
    age: "?",
    photo: photos.character.marcel,
  },

  {
    id: 11,
    name: "Hange Zoe",
    age: "?",
    photo: photos.character.hange,
  },

  {
    id: 12,
    name: "Connie Springer",
    age: "?",
    photo: photos.character.connie,
  },

  {
    id: 13,
    name: "Jean Kirstein",
    age: 19,
    photo: photos.character.jean,
  },

  {
    id: 14,
    name: "Erwin Smith",
    age: 37,
    photo: photos.character.erwin,
  },

  {
    id: 15,
    name: "Historia Reiss",
    age: 19,
    photo: photos.character.historia,
  },

  {
    id: 16,
    name: "Sasha Braus",
    age: 19,
    photo: photos.character.sasha,
  },

  {
    id: 17,
    name: "Grisha Yeager",
    titan: ["Titã de ataque"],
    age: 39,
    photo: photos.character.grisha,
  },

  {
    id: 18,
    name: "Marco Bodt",
    age: "?",
    photo: photos.character.marco,
  },

  {
    id: 19,
    name: "Frieda Reiss",
    titan: ["Titã fundador"],
    age: 18,
    photo: photos.character.frieda,
  },

  {
    id: 20,
    name: "Pieck Finger",
    titan: ["Titã quadrúpede"],
    age: "?",
    photo: photos.character.pieck,
  },

  {
    id: 21,
    name: "Floch Forster",
    age: "?",
    photo: photos.character.floch,
  },

  {
    id: 22,
    name: "Ymir Fritz",
    titan: ["Titã fundador"],
    age: 23,
    photo: photos.character.ymirF,
  },

  {
    id: 23,
    name: "Carla Yeager",
    age: "?",
    photo: photos.character.carla,
  },
];
