import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export function redirectToLoginWhenLoggedOut(isLoggedOut$: Observable<boolean>, router: Router, autoUnsubscribe:boolean = false) {
    let isLoggedOut = isLoggedOut$.filter((v)=>!!v);

    let subscription = isLoggedOut.subscribe(()=>{
        router.navigateByUrl('login');
    });

    if (autoUnsubscribe) {
        isLoggedOut.take(1).toPromise().then(()=>{
            if (subscription){
                subscription.unsubscribe();
            }
        });
    }
}