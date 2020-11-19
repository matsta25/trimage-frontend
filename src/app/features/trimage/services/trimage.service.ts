import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from "../../../../environments/environment";

const TRIMAGE_API_ENDPOINT = '/trimage'

@Injectable({
  providedIn: 'root',
})
export class TrimageService {

  constructor(private http: HttpClient) {
  }

  public uploadFile(file: File): Observable<object> {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
    return this.http.post(`${environment.baseUrl}${TRIMAGE_API_ENDPOINT}`, formData);
  }
}
