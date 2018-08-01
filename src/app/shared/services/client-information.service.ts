import { Injectable } from "@angular/core";
import { ClientInformation } from "../models/client-information.model";
import { AngularFirestore } from "angularfire2/firestore";
import { memoize } from 'rambdax';

@Injectable()
export class ClientInformationService  {

    constructor(private readonly db: AngularFirestore) {}

    getClientInformation = memoize(async (id: string) => {
        const clientSnapshot = await this.db.collection('clients')
            .doc(`${id}`)
            .ref
            .get();
    
        if (clientSnapshot.exists) {
            return clientSnapshot.data() as ClientInformation;
        }
    })

}