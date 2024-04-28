import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
// External library: @capacitor-community/http
import {
  Http as HttpCCommunity,
  HttpResponse as HttpResponseCComunity,
} from '@capacitor-community/http';
// Official library: @capacitor/core ( (*1) probably I don't need to use it explicitly)
import {
  CapacitorHttp as CapHttp,
  HttpResponse as CapHttpResponse,
} from '@capacitor/core';
import { IHero } from '@data/interfaces/marvel-entity-types/heroe-interface';
import { IMarvelHttpRequest } from '@data/interfaces/marvel-request.interface';
import { environment as ENV } from '@env/environment';
import * as crypto from 'crypto-js';
import { Observable } from 'rxjs';

/* OBS: 4) HTTP requests and Capacitor

***********************************************************
  (*1) @angular/common/http or @capacitor/core comments
***********************************************************
Not 100% sure how it works in this case.
From what I've read, I don't need to change my code to use Capacitor's HTTP plugin. I just need to
install it and add it (with the correct configuration) to the capacitor.config.ts file.
Then I can use it in my Angular service without changing anything else (I'm talking about the http client and params I'm using
from @angular/common/http).

***********************************************************
  @capacitor-community/http comments
***********************************************************
Despite what I've mentioned above, I've also tried @capacitor-community/http, which is a community plugin
for HTTP requests that may include additional features. For the purpose of this demo, since it's safer and more reliable
to use official libraries, and because I'm not tied or limited to using a specific library, I prefer to use the official one
over the community one.

***********************************************************
  Conclusion
***********************************************************
All the different approaches works fine, so for demonstration purpose, I'll leave them all in the following code.
*/

@Injectable({
  providedIn: 'any',
})
export class HeroesService {
  private readonly _http = inject(HttpClient);

  publicKey = ENV.marvelPublicKey;
  privateKey = ENV.marvelPrivateKey;
  apiMarvelURL = ENV.apiMarvelURL;

  /** Retrieves a list of heroes using Angular's HttpClient.
   *
   * @param limit The maximum number of heroes to retrieve. Default is 20.
   * @returns An Observable that emits the response containing the list of heroes.
   */
  public getHeroes(limit: number = 20): Observable<IMarvelHttpRequest<IHero>> {
    const { ts, hash } = this.getHashAndTimestamp();
    const url = `${this.apiMarvelURL}/characters`;

    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('ts', ts)
      .set('apikey', this.publicKey)
      .set('hash', hash);

    return this._http.get<IMarvelHttpRequest<IHero>>(url, { params });
  }

  /** Retrieves a list of heroes using the official Capacitor HTTP plugin.
   *
   * @param limit - The maximum number of heroes to retrieve (default: 20).
   * @returns A Promise that resolves to an IMarvelHttpRequest containing the list of heroes.
   * @throws An error if there was an issue fetching the heroes.
   */
  public getHeroesCapacitor(
    limit: number = 20
  ): Promise<IMarvelHttpRequest<IHero>> {
    const { ts, hash } = this.getHashAndTimestamp();
    const url = `${this.apiMarvelURL}/characters`;

    const params = {
      limit: limit.toString(),
      ts: ts,
      apikey: this.publicKey,
      hash: hash,
    };

    return CapHttp.request({
      method: 'GET',
      url: url,
      params: params,
    })
      .then((response: CapHttpResponse) => {
        if (response.status != 200) {
          throw new Error(`Error fetching heroes: ${response.status}`);
        }
        return response.data as IMarvelHttpRequest<IHero>;
      })
      .catch((error) => {
        // This ensures that the error is propagated up to the code that called getHeroesAlt
        // which in this case is the HomePage component.
        console.error('Heroes Service - Error fetching heroes:', error);
        throw error;
      });
  }

  /** Retrieves a list of heroes using @capacitor-community/http plugin.
   * @param limit The maximum number of heroes to retrieve. Default is 20.
   * @returns A Promise that resolves to an object containing the list of heroes.
   * @throws An error if there was an issue fetching the heroes.
   */
  public getHeroesCCommunity(
    limit: number = 20
  ): Promise<IMarvelHttpRequest<IHero>> {
    const { ts, hash } = this.getHashAndTimestamp();
    const url = `${this.apiMarvelURL}/characters`;

    const params = {
      limit: limit.toString(),
      ts: ts,
      apikey: this.publicKey,
      hash: hash,
    };

    return HttpCCommunity.request({
      method: 'GET',
      url: url,
      params: params,
    })
      .then((response: HttpResponseCComunity) => {
        if (response.status != 200) {
          throw new Error(`Error fetching heroes: ${response.status}`);
        }
        return response.data as IMarvelHttpRequest<IHero>;
      })
      .catch((error) => {
        // This ensures that the error is propagated up to the code that called getHeroesAlt
        // which in this case is the HomePage component.
        console.error('Heroes Service - Error fetching heroes:', error);
        throw error;
      });
  }

  private getHashAndTimestamp() {
    const timestamp = new Date().getTime().toString();
    const hash = crypto
      .MD5(timestamp + this.privateKey + this.publicKey)
      .toString();
    return { ts: timestamp, hash: hash };
  }
}
