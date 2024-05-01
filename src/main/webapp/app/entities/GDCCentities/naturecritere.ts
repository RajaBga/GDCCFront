export class Naturecritere {
  natureCritereId: number;
  natureCritereLibelle: string;
  natureCritereDescription: string;

  constructor(natureCritereId: number, natureCritereLibelle: string, natureCritereDescription: string) {
    this.natureCritereId = natureCritereId;
    this.natureCritereLibelle = natureCritereLibelle;
    this.natureCritereDescription = natureCritereDescription;
  }
}
