import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pluck, reduce, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ChariProjReq } from './chari-proj-req';

export interface ChariProjReqResponse {
  charitableProjectRequests: ChariProjReq[];
  results: number;
  status: string;
}

const convertArrayToHashTable = (arr: ChariProjReq[]) => {
  return arr.reduce((acc, value) => {
    return { ...acc, [value.id]: value };
  }, {});
};

@Injectable({
  providedIn: 'root',
})
export class ChariProjReqService {
  rootUrl = environment.serverUrl;
  chariProjReqArr: ChariProjReq[] = [];
  constructor(private http: HttpClient) {}

  getChariProjReqArr() {
    return this.http.get<ChariProjReqResponse>(`${this.rootUrl}/charitableProjectReqs`).pipe(
      pluck('charitableProjectRequests'),
      tap(chariProjReqs => {
        this.chariProjReqArr = [...this.chariProjReqArr, ...chariProjReqs];
      })
    );
  }

  getCurrentChariProjArr(id: string) {
    return convertArrayToHashTable(this.chariProjReqArr)[id];
  }
}
