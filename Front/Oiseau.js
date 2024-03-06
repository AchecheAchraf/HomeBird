export default class Oiseau{
    constructor(nom, couleur, longevite, famille, espece, genre, taille, poids){
    this.nom =nom ; 
    this.couleur=couleur; 
    this.longevite=longevite ; 
    this.famille=famille; 
    this.espece=espece ; 
    this.genre=genre; 
    this.taille=taille ; 
    this.poids=poids; 
    this.id=id ; 

}

get nom(){
    return this.nom ; 
}

get couleur(){
    return this.couleur ; 
}

get longevite(){
    return this.longevite ; 
}

get famille(){
    return this.famille ; 
}

get espece(){
    return this.espece ; 
}

get genre(){
    return this.genre ; 
}

get taille(){
    return this.taille ; 
}

get poids(){
    return this.poids ; 
}

get id(){
    return this.id ; 
}

pourAfficher() {
    return `--> ${this._nom}(${this._couleur} ${this._longevite} ${this._famille} ${this._espece}(${this._genre} ${this._taille} ${this._poids}(${this._id})`;
  }

}