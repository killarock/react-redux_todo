import { config } from '../constants/localStorage';

const { name } = config.localStorage;

export class LS {
  static get(field) {
    if (LS._isExist()) {
      const data = JSON.parse(localStorage.getItem(name));
      if (!field) return data;
      if (data[field]) return data[field];
    }

    return undefined;
  }

  static set(field, data = {}) {
    let dataToStorage = {};

    if (field) {
      dataToStorage = LS.get();
      if (!dataToStorage) dataToStorage = {};
      dataToStorage[field] = data;
    } else {
      dataToStorage = data;
    }

    localStorage.setItem(name, JSON.stringify(dataToStorage));
  }

  static _isExist() {
    return !!localStorage.getItem(name);
  }
}
