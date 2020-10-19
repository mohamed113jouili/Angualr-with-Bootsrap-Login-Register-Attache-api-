import { Component, OnInit } from '@angular/core';
import { Sauce } from 'protractor/built/driverProviders';
import { User } from '../Models/user';
import { AuthService } from '../Services/auth.service';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const usersic:User[]=[]
const usersc:User[]=[
  {
    name: 'Russia',
    firestname: 'f/f3/Flag_of_Russia.svg',
    lastname: "17075200",
    
  },
  {
    name: 'Russia',
    firestname: 'f/f3/Flag_of_Russia.svg',
    lastname: "17075200",
    
  },
  {
    name: 'Russia',
    firestname: 'f/f3/Flag_of_Russia.svg',
    lastname: "17075200",
    
  },
  {
    name: 'Russia',
    firestname: 'f/f3/Flag_of_Russia.svg',
    lastname: "17075200",
    
  },
  {
    name: 'Russia',
    firestname: 'f/f3/Flag_of_Russia.svg',
    lastname: "17075200",
    
  },{
    name: 'Russia',
    firestname: 'f/f3/Flag_of_Russia.svg',
    lastname: "17075200",
    
  },{
    name: 'Russia',
    firestname: 'f/f3/Flag_of_Russia.svg',
    lastname: "17075200",
    
  }

]
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=this.sau.getcurrentUsers()

  countries = COUNTRIES;
  page = 1;
  pageSize = 4;
  collectionSize = this.users.length;

  constructor(public sau:AuthService ) { }

  ngOnInit(): void {
     this.refreshCountries();
    this.sau.getcurrentUsers() 

  }


getUsers(){
var a:User[] = []; 
  


    a = JSON.parse(localStorage.getItem('session'));
    a = a.filter(function (el) {
      return el != null;
    });

    return a;
}



refreshCountries() {
  this.sau.cu.value
  .map((user, i) => ({id: i + 1, ...user}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
