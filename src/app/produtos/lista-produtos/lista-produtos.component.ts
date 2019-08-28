import { ProdutosService } from './../shared/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtos: Observable<any[]>;
  produtoService: any;


  constructor(private produtosService: ProdutosService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll();
  }

  remover(key: string, filePath: string) {
    this.produtoService.remove(key, filePath);
  }

}
