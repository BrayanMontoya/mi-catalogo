import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  myMessages: string[] = [];
  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.myMessages = this.messageService.messages;
  }

}
