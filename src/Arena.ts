import Robot from "./Robot";
import { arenaMatrices } from "./constants";

export default class Arena {
  private static arenaStore: Map<string, (Robot | null)[][]>;

  constructor() {
    Arena.arenaStore = new Map();
  }

  public static createArena(arenaName: string): string {
    Arena.arenaStore.set(arenaName, arenaMatrices);
    if (Arena.arenaStore.get(arenaName)) {
      return "arena has been made";
    } else {
      return "arena hasnt been made";
    }
  }

  public static getArena(arenaName: string): ((Robot | null)[][] | undefined) {
    return Arena.arenaStore.get(arenaName);
  }
}
