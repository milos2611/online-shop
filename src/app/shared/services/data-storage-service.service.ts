import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryModel } from '../models/category.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message-data.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataStorageServiceService {




  private cateogryUrl = 'api/cateogry';  // URL to web api



  constructor(private http: HttpClient, private messageService: MessageService) { }






  /** GET Category from the server */
  getCategory(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.cateogryUrl).pipe(

      catchError(this.handleError('getProduct', []))
    )
  }



 /** GET hero by id. Will 404 if id not found */
  getCategoryById(name: number | string): Observable<CategoryModel> {
    const url = `${this.cateogryUrl}/${name}`;
    return this.http.get<CategoryModel>(url).pipe(
     // map((heroes: CategoryModel) => heroes.find(hero => hero.name === +name)),
        tap(_ => this.log(`fetched hero id=${name}`)),
      catchError(this.handleError<CategoryModel>(`getHero id=${name}`))
    );
  }

  /** POST Category on server */
  storeCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.cateogryUrl, category, httpOptions).pipe(
      tap(_ => this.log('Category is stored!!!')),

      catchError(this.handleError<CategoryModel>('addHero'))

    )
  }


  /** POST Product on server */
  storeProduct(category: CategoryModel): Observable<any> {
    return this.http.put(this.cateogryUrl, category, httpOptions).pipe(
      tap(_ => this.log('Product is stored!!!')),
      catchError(this.handleError<CategoryModel>('addHero'))

    )
  }


  /** DELETE: delete the Category from the server */
  deleteCategory(product: CategoryModel | number): Observable<CategoryModel> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.cateogryUrl}/${id}`;

    return this.http.delete<CategoryModel>(url, httpOptions).pipe(
      tap(_ => this.log('Category is deleted!!!')),
      catchError(this.handleError<CategoryModel>('deleteProduct'))
    );
  }

  /** DELETE: delete the Product from the server */
  deleteProduct(product: CategoryModel, index: number): Observable<any> {

    return this.http.put(this.cateogryUrl, product, httpOptions).pipe(
      tap(_ => this.log('Product is deleted!!!')),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  editCategory(category: CategoryModel): Observable<any> {
    return this.http.put(this.cateogryUrl, category, httpOptions).pipe(
      tap(_ => this.log('Cateory  is changed!!!')),
      catchError(this.handleError<CategoryModel>('addHero'))

    )
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead



      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**Message notification */
  private log(message: string) {
    this.messageService.add(`ShoopCart: ${message}`);
  }
}
