import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../journal-service.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalServiceService]
})

export class EntryListComponent implements OnInit {

  entries: Array<string>;

  constructor( private entry: JournalServiceService ) { }

  ngOnInit() {
    this.entry.getList().subscribe(
      (entries) => { this.entries = entries; }
    );
  }

}
