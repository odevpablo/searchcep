import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 

  cep: string = '';
  endereco: {
    logradouro: string;
    localidade: string;
    uf: string;
  } = {
    logradouro: '',
    localidade: '',
    uf: '',
  };

  retorno = {
    rua: '',
    cidade: '',
    estado: '',
  }

  pesquisado = false;
  espera = false;

  constructor(private http: HttpClient) { }

  pesquisa() {
    this.espera = true;
    this.cep = this.cep.replace(/\D/g, '');
    const url = 'https://viacep.com.br/ws/' + this.cep + '/json/';

    this.http.get(url).subscribe((res: any) => {
      this.endereco = res;
      this.retorno.rua = this.endereco.logradouro;
      this.retorno.cidade = this.endereco.localidade;
      this.retorno.estado = this.endereco.uf;

      this.pesquisado = true;
      this.espera = false;
    });
  }

  limpa() {
    this.pesquisado = false;
    this.espera = false;
    this.cep = '';
    this.endereco = {
      logradouro: '',
      localidade: '',
      uf: '',
    };
    this.retorno.rua = '';
    this.retorno.cidade = '';
    this.retorno.estado = '';
  }
}
