import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactoService } from 'src/app/service/contacto.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  error_nombre = '';
  error_email = '';
  error_mensaje = '';

  mensaje_exito = 'd-none';
  mensaje_error = 'd-none';

  contactoForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    mensaje: new FormControl(''),
  });

  constructor(public contactoService: ContactoService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.error_nombre = '';
    this.error_email = '';
    this.error_mensaje = '';
    this.mensaje_exito = 'd-none';
    this.mensaje_error = 'd-none';

    if(!this.contactoForm.value.nombre){
      this.error_nombre = 'is-invalid';
      return;
    }
    if(!this.contactoForm.value.email){
      this.error_email = 'is-invalid';
      return;
    }
    if(!this.contactoForm.value.mensaje){
      this.error_mensaje = 'is-invalid';
      return;
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!this.contactoForm.value.email.match(validRegex)) {
      this.error_email = 'is-invalid';
      return;
    }

    let datos = JSON.stringify(this.contactoForm.value);
    let contacto = new Contacto(this.contactoForm.value.nombre, this.contactoForm.value.email, this.contactoForm.value.mensaje);

    this.contactoService.contacto(contacto).subscribe(res => {
        if(res.mensaje?? null){
          this.mensaje_exito = '';
          this.contactoForm.reset();
        }
      },
      err => {
        this.mensaje_error = '';
      });
  }

}
