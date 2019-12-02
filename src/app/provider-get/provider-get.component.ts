import { Component, OnInit } from '@angular/core';
import Provider from '../Provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-get',
  templateUrl: './provider-get.component.html',
  styleUrls: ['./provider-get.component.css']
})
export class ProviderGetComponent implements OnInit {
  providers: Provider[];
  constructor(private ps: ProviderService) { }
  ngOnInit() {
    this.ps.Get().subscribe((data: Provider[]) => { this.providers = data; });
  }
  delete(id) {
    this.ps.Delete(id).subscribe(res => {
      this.providers.splice(id, 1);
      this.ngOnInit();
    });
  }
}
