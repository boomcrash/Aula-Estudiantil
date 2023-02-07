import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(150px)'
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ]),
    
  ],
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  state = 'hide'

  constructor() {
    window.addEventListener('scroll', () => {
      const top = window.pageYOffset;
      const bottom = window.pageYOffset + window.innerHeight;
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = section.offsetTop + section.offsetHeight;

        if (sectionTop <= bottom && sectionBottom >= top) {
          this.state = 'show';
        } else {
          this.state = 'hide';
        }
      });
    });

 
  }





slides = [{ imgUrl: 'https://images.adsttc.com.qtlcn.com/media/images/5006/e518/28ba/0d41/4800/02db/medium_jpg/stringio.jpg?1414047968' },
{ imgUrl: 'https://th.bing.com/th/id/R.98cfdb1b32650775bede01124fa7508a?rik=%2buBBsQ3XU8GZEA&pid=ImgRaw&r=0' },
{ imgUrl: 'https://jmarchitects.com.au/wp-content/uploads/2018/10/AL16_RT.jpg' },
{ imgUrl: 'https://th.bing.com/th/id/OIP.wf9wsWxS2aMDTwNYyesJrgHaFS?pid=ImgDet&w=900&h=643&rs=1' }];
currentSlide = 0;

prevSlide() {
  this.currentSlide = (this.currentSlide + this.slides.length - 1) % this.slides.length;
}

nextSlide() {
  this.currentSlide = (this.currentSlide + 1) % this.slides.length;
}


careers = [{
  name: 'Ciencias Computacionales',
  description: 'Aprende las habilidades para resolver problemas tecnologicos',
  imgUrl: 'https://th.bing.com/th/id/OIP.EWgafetsbAjanvVqHygp6AHaEm?pid=ImgDet&rs=1'
},
{
  name: 'Administracion de datos',
  description: 'Gana conocimientos para administrar datasets de informacion para realizar sistemas de predicciones a nivel mundial',
  imgUrl: 'https://th.bing.com/th/id/OIP.fQ3LKgpztiZ-ZrJD0M4cLgHaE_?pid=ImgDet&rs=1'
},
{
  name: 'Ingeniero en IA',
  description: 'Encargate de darle al mundo una inteligencia artificial que pueda resolver problemas de la vida cotidiana',
  imgUrl: 'https://th.bing.com/th/id/R.3c6900e0ddbbc9d3d7c6282a755b3fad?rik=33iv7HDmuF3Jjw&pid=ImgRaw&r=0'
},
{
  name: 'Machine Learning Enginner',
  description: 'Se quien logre resolver los problemas de la inteligencia artificial con el uso de la programacion avanzada',
  imgUrl: 'https://th.bing.com/th/id/OIP.gjEMFzTpQ74J31Py8egwpwHaED?pid=ImgDet&rs=1'
},
{
  name: 'Big Data Engineer',
  description: 'Maneja abuntantes cantidades de datos para realizar predicciones y analisis de datos',
  imgUrl: 'https://th.bing.com/th/id/OIP.qJ1WwVGC6AiC2iOKfS0g3wHaEK?pid=ImgDet&rs=1'
},
{
  name: 'Deep Learning Engineer',
  description: 'Metete en el mundo de aprendizaje profundo para resolver problemas que generalmente requieren de un alto nivel de complejidad',
  imgUrl: 'https://th.bing.com/th/id/OIP.D1Ad88vyJeknpF2Jq4VK1gHaEo?pid=ImgDet&rs=1'
},
];



}
