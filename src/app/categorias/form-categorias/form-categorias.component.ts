import { ToastrService } from 'ngx-toastr';
import { CategoriasService } from './../shared/categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css']
})
export class FormCategoriasComponent implements OnInit {
formCategoria: FormGroup;
key; string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private categoriasService: CategoriasService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.key = null;
    this.formCategoria = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: [''],
    });
  }
}
