export class Consumer{
    createdAt: Date;
    constructor(
        public id: number,
        public email: string,
        public phoneNumber: string,
        public username: string){
        this.createdAt = new Date();
    }
}