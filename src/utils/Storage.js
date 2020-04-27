

class Storage {
  static load(key) {
    const json = localStorage.getItem(key);

    return json ? JSON.parse(json) : null;
  }
  static save(json,key) {
    localStorage.setItem(key, JSON.stringify(json));
  }
}

export default Storage;
