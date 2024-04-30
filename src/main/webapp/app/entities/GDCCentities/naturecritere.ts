export class Naturecritere {
  natureCritereId?: number;
  natureCritereLibelle: string;
  natureCritereDescription: string;

  constructor(natureCritereLibelle: string, natureCritereDescription: string) {
    this.natureCritereLibelle = natureCritereLibelle;
    this.natureCritereDescription = natureCritereDescription;
  }
}
