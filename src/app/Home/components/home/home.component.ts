import { Component, OnInit } from '@angular/core';
import { CredoInterface,  } from 'src/app/Home/models/item.models';
import { HomePgService } from 'src/app/Home/services/home-pg.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  productSection$!: Observable<CredoInterface>;


  constructor(private _homePgService: HomePgService){}
  isMenuOpened: boolean = false;
  toggleMenu(){this.isMenuOpened = !this.isMenuOpened;}


  ngOnInit(): void {
    this.productSection$=this._homePgService.getHome();


    this.slides[0] = {
      id: 0,
      src:  'assets/HomeImage/1.png',
      title: 'ვრცლად',
      subtitle: 'გაიაქტიურე VISA ციფრული ბარათი უფასოდ Mycredo-დან, გადაიხადე უფრო კომფორტულად!',
      
    }
    
    this.slides[1] = {
      id: 1,
      src: 'assets/HomeImage/2.png',
      title: 'ვრცლად',
      subtitle: 'გახდი კრედო ბანკის პარტნიორი, განათავსე პროდუქტი ან სერვისი უმარტივესად და გაყიდე მეტი.'
    }
    this.slides[2] = {
      id: 2,
      src: 'assets/HomeImage/3.png',
      title: 'ვრცლად',
      subtitle: 'მიიღე სესხი, გაიუმჯობესე საკრედიტო ისტორია და დაიწყე ყველაფერი თავიდან!'
    }
    this.slides[3] = {
      id: 3,
      src:  'assets/HomeImage/4.png',
      title: 'ვრცლად',
      subtitle: 'გახსენი მაღალსარგებლიანი ვადიანი ანაბარი და დააგროვე კიდევ უფრო მეტი!'
    }
    this.slides[4] = {
      id: 4,
      src:  'assets/HomeImage/5.png',
      title: 'ვრცლად',
      subtitle: 'ვიდეობანკინგის სერვისი ემიგრანტებისთვის უკვე ხელმისაწვდომია! მიიღე საბანკო მომსახურება.'
    }
    this.slides[5] = {
      id: 5,
      src:  'assets/HomeImage/6.png',
      title: 'ვრცლად',
      subtitle: 'გაანარდე ფულადი გზავნილი Mcredo-დან ონლაინ -საუკეთსო კურსით მსოფლიოს მასშტაბით!'
    }
    this.slides[6] = {
      id: 6,
      src:  'assets/HomeImage/7.png',
      title: 'ვრცლად',
      subtitle: 'დაამატე ნებისმიერი ბანკის ბარათი Mycredo-ში და გადარიცხე თანხა მომენტალურად!'
    }
    this.slides[7] = {
      id: 7,
      src:  'assets/HomeImage/8.png',
      title: 'ვრცლად',
      subtitle: 'ნუ დაკარგავ შემოსავალს! დააყენე Mycdredo  მობილური ტერმინალი და მიიღე საბარათე გადასახადები!'
    }
     
    
  }


}