import { Consumer } from './../Model/consumer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

 private consumerList: Consumer[] = [
   new Consumer(1,'bob@bob.com','1234567890','bob')
 ];

 getConsumer(consumerEmail: string)
 {
   return this.consumerList.find(consumer => consumer.email === consumerEmail);
 }

 updateConsumer(consumer: Consumer)
 {
   const consumerToUpdate = this.consumerList.find(consumerIterator => consumerIterator.id === consumer.id);
   if (consumerToUpdate !== null)
   {
     consumerToUpdate.email = consumer.email;
     consumerToUpdate.phoneNumber = consumer.phoneNumber;
     consumerToUpdate.username = consumer.username;
   }
 }

 createConsumer(consumerEmail: string, consumerPhoneNumber: string, consumerUsername: string)
  {
   this.consumerList.push(new Consumer(this.consumerList.length + 1, consumerEmail, consumerPhoneNumber, consumerUsername));
 }

 deleteConsumer(consumerToDelete: Consumer)
 {
   this.consumerList.splice(this.consumerList.indexOf(consumerToDelete), 1);
 }

}

