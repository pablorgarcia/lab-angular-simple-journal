import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalServiceService } from '../journal-service.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalServiceService]
})
export class SingleEntryComponent implements OnInit {

  entryId: string;
  entry: any;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalServiceService
  ) { }

  ngOnInit() {
    return this.route.params
    .subscribe(
      (params) => this.getEntryDetail(params['id'])
    );
  }

  getEntryDetail(id) {
    return this.journalService.getEntryDetail(id)
    .subscribe(
      (entry) => { this.entry = entry; }
    );
  }

}
