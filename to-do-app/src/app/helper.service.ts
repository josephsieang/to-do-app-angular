import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  mapToJson(map: Map<string, boolean>): string {
    return JSON.stringify(this.strMapToObj(map));
  }

  jsonToMap(jsonStr: string): Map<string, boolean> {
    return this.objToStrMap(JSON.parse(jsonStr));
  }

  strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
      // We don’t escape the key '__proto__'
      // which can cause problems on older engines
      obj[k] = v;
    }
    return obj;
  }

  objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }
}
