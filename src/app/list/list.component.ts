import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  autos: Automovil[] = [];
  autoSeleccionado: Automovil = {} as Automovil;
  displayProgressBar: boolean = true;
  
  closeResult = '';
  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit() {
    this.autoService.getAutos().subscribe((response)=>{
      this.displayProgressBar = false;
      this.autos = response.data;
    });

  }
  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
