export interface IMessage {
    titre: string;
    corps: string;
    numero: number;
}

export class Message implements IMessage {

    constructor(
        public titre: string,
        public corps: string,
        public numero: number,
    ) {}

}
