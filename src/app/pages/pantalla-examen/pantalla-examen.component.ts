import { Component, OnInit } from '@angular/core';
import { IResultPokemones } from 'src/app/interface/pokemonInterface';
import { PokemonService } from 'src/app/services/PokemonService';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})
export class PantallaExamenComponent implements OnInit {

  listaDePokemones: IResultPokemones[] = [];
  columnTabla: any;

  constructor(private pokemonService: PokemonService, private mensajes: MessageService) { }

  ngOnInit(): void {
    this.iniColumnaTabla();
    this.pokemonService.getObtenerPokemones().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listaDePokemones = datos.results;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
    );
  }

  iniColumnaTabla(){
    this.columnTabla = [
        {
          field: 'name', header: 'Nombre'
        },
        {
          field: 'url', header: 'Url'
        }
     ];
  }

}
