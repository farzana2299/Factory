import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewraw',
  templateUrl: './viewraw.component.html',
  styleUrls: ['./viewraw.component.css']
})
export class ViewrawComponent {
  rid: any
  rdata: any = {}
  constructor(private ar: ActivatedRoute, private rt:Router,private ds: DataService) { }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.rid = data.id
    })

    //api call
    this.ds.getsRaw(this.rid).subscribe((result: any) => {
      this.rdata = result.message
      console.log(this.rdata);

    })
  }
  deleteraw()
  {
    this.ds.deleteraw(this.rid).subscribe((result:any)=>{
      alert(result.message)
      this.rt.navigateByUrl("rawmaterial")
    })
  }
}
