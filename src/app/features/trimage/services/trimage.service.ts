import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from "../../../../environments/environment";

const TRIMAGE_API_ENDPOINT = '/trimage'

const TRIMAGE_API_UPLOAD_PHOTO = '/upload-photo'
const TRIMAGE_API_RENDER = '/render'

@Injectable({
  providedIn: 'root',
})
export class TrimageService {

  private _filename: string = null;

  constructor(private http: HttpClient) {
  }

  public uploadFile(file: File): Observable<object> {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
    return this.http.post(`${environment.baseUrl}${TRIMAGE_API_ENDPOINT}${TRIMAGE_API_UPLOAD_PHOTO}`, formData);
  }

  public render(fileName: string, numberOfShapes: string, mode: string): Observable<object> {
    return this.http.post(`${environment.baseUrl}${TRIMAGE_API_ENDPOINT}${TRIMAGE_API_RENDER}`, {fileName, numberOfShapes, mode});
  }


  get filename(): string {
    return this._filename;
  }

  set filename(value: string) {
    this._filename = value;
  }
}
