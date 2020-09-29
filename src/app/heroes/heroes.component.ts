import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  heroName: string;
  heroId: number;
  heroes: any;


  constructor(private heroService: HeroService) { }

  

  ngOnInit(): void {
    this.heroes = this.heroService.heroes;
  }

  onClique(name, id): void {
    this.heroName = name;
    this.heroId = id;
  }
}
