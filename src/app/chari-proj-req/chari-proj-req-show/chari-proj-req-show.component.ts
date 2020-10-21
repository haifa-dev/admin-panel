import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import * as moment from 'moment';
import { ChariProjReq } from '../chari-proj-req';
import { ChariProjReqService } from '../chari-proj-req.service';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chari-proj-req-show',
  templateUrl: './chari-proj-req-show.component.html',
  styleUrls: ['./chari-proj-req-show.component.scss'],
})
export class ChariProjReqShowComponent implements OnInit {
  chariProjReq: ChariProjReq;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private chariProjReqService: ChariProjReqService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => this.chariProjReqService.getSingular(id))
      )
      .subscribe(chariProjReq => {
        this.chariProjReq = chariProjReq;
        this.loading = false;
      });
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) this.loading = true;
  }

  extractSubDomain(url: string) {
    const name = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim);
    return name.length ? name[0] : 'Website';
  }

  getRelativeTime(date) {
    const d = Date.parse(date);
    return moment(d).fromNow();
  }
}
