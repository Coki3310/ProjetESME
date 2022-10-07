import { Component, OnInit } from '@angular/core';
import { FaceStudent } from './models/face-students.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 myFace!: FaceStudent;
 myOtherFace!: FaceStudent;

 ngOnInit() {
  this.myFace = new FaceStudent(
    'Archibald',
    'Mon meilleur ami depuis tout petit !',
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    new Date(),
    0
  );
  this.myOtherFace = new FaceStudent(
    'Archibald',
    'Mon meilleur ami depuis tout petit !',
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    new Date(),
    0
  );
 }
}
