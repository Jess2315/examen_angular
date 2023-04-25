import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../interface/pokemonInterface';

const API_OBTENER_POKEMONES = environment.API_OBTENER_POKEMONES;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getObtenerPokemones(){
    return this.http.get<IPokemon>(API_OBTENER_POKEMONES);
  }

}