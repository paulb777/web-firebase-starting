import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom(
    //   provideFirebaseApp(() => initializeApp(environment.firebase)),
    //   provideFirestore(() => getFirestore()),
    //   provideAuth(() => getAuth()),
    //   provideFunctions(() => getFunctions()),
    //   provideStorage(() => getStorage()),
    //   provideMessaging(() => getMessaging())
    // ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychatpaul-ff3b3","appId":"1:1059206752726:web:a4da22611b2578616d1c77","storageBucket":"friendlychatpaul-ff3b3.firebasestorage.app","apiKey":"AIzaSyBrqmBmG07vKLaN9P4SeZNeKJYxv9dtQBA","authDomain":"friendlychatpaul-ff3b3.firebaseapp.com","messagingSenderId":"1059206752726"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
