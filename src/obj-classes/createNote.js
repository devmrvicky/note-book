import getRandomDarkColor from "@/methods/getRandomDarkColor";

class Note {
  constructor(title, body, owner, ownerId) {
    this.title = title;
    this.body = body;
    this.owner = owner;
    this.ownerId = ownerId;
    this.color = getRandomDarkColor()
  }

  setTitle(title) {
    this.title = title;
  }
}

export default Note;
