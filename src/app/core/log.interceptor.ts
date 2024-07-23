import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const logInterceptor: HttpInterceptorFn = (req, next) => {
  const clone = req.clone();
  console.log(clone.urlWithParams);

  const startTime = performance.now(); // Démarre le chronomètre

  return next(clone).pipe(
    tap((Response: any) => {
      if (Response instanceof HttpResponse) {
         const endTime = performance.now(); //Arrete le chrono
         const duration = endTime - startTime; //calcul la durée
         console.log(`Durée de la requete: ${duration.toFixed(2)} ms`); //affiche la durée
      }
    })
  );
};

