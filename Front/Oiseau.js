export default class Oiseau{
    constructor(id, nom, couleur, longevite, famille, espece, genre, taille, poids){
    this._id=id ; 
    this._nom =nom ; 
    this._couleur=couleur; 
    this._longevite=longevite ; 
    this._famille=famille; 
    this._espece=espece ; 
    this._genre=genre; 
    this._taille=taille ; 
    this._poids=poids; 


}

get id(){
    return this._id ; 
}

get nom(){
    return this._nom ; 
}

get couleur(){
    return this._couleur ; 
}

get longevite(){
    return this._longevite ; 
}

get famille(){
    return this._famille ; 
}

get espece(){
    return this._espece ; 
}

get genre(){
    return this._genre ; 
}

get taille(){
    return this._taille ; 
}

get poids(){
    return this._poids ; 
}



pourAfficher() {
    return `--> ${this._id} ${this._nom} (${this._couleur} ${this._longevite} ${this._famille} ${this._espece}(${this._genre} ${this._taille} ${this._poids})`;
  }

}