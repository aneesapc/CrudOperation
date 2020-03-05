import { ConsumerService } from './../../Services/consumer.service';
import { Consumer } from './../../Model/consumer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  deletingConsumer: Consumer;
  toSearchConsumerEmail: string;

  searchConsumer()
  {
    if (this.toSearchConsumerEmail.length > 0)
    {
      this.deletingConsumer = this.consumerService.getConsumer(this.toSearchConsumerEmail);
    }
  }

  deleteConsumer()
  {
    this.consumerService.deleteConsumer(this.deletingConsumer);
    this.deletingConsumer = null;
  }

  

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
  }

}
