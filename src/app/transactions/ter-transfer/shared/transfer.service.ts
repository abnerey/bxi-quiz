import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class TransferService {
    constructor(private readonly db: AngularFirestore) {}

    async getAccounts(userId: string) {
        const data = [];
        const querySnapshot = await this.db.collection('cuentas').ref
            .where('userId', '==', userId)
            .get();

        if (querySnapshot.size) {
            querySnapshot.forEach(doc => {
                data.push(doc.data());
            })
        }
        return data;
    }

    async getNotebook(userId: string) {
        let notebook = [];
        const querySnapshot = await this.db.collection('libreta').ref
            .where('userId', '==', userId)
            .get();
        
        if (querySnapshot.size) {
            querySnapshot.forEach(contact => {
                notebook.push(contact.data());
            })
        }

        console.log('notebook', notebook);
        for (let i = 0; i < 3; i++) {
            notebook = notebook.concat([...notebook]);
        }
        return notebook;
    }
}