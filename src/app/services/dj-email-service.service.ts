import { inject, Injectable } from '@angular/core';
import { doc, setDoc } from "firebase/firestore";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { addDoc, collection, collectionData, CollectionReference, DocumentReference, Firestore, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjEmailServiceService {
  private firestore: Firestore = inject(Firestore);
  djRequests$: Observable<any>;
  djRequestsCollection: CollectionReference;
  hasBookedDj = false;

  constructor() {
    this.djRequestsCollection = collection(this.firestore, 'djRequests');

    this.djRequests$ = collectionData(this.djRequestsCollection) as Observable<any>;
  }

  addDocumentToFirestore(djBookingRequestPayload: any): Promise<boolean | void> {
    djBookingRequestPayload.title = djBookingRequestPayload.customerEmail;
    console.log(djBookingRequestPayload);
    
    return addDoc(this.djRequestsCollection, { data: djBookingRequestPayload }).then((documentReference: DocumentReference) => {
      // console.log(
      //   documentReference
      // );
    }).catch((e) => {
      console.log(e);

      return false;
      
    }).finally(() => {
      console.log('succ');
      
      this.hasBookedDj = true;
      return true;
    });
    // getDocs(collection(this.firestore, "testPath")).then((response) => {

    //   console.log(response);

    // }); 

    // this.djDoc.set({ title: 'new doc'});

    // // Add a new document in collection "cities"
    // setDoc(doc(this.firestore, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
  }
}
