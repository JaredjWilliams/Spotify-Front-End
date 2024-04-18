import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Album} from "../models/Album";
import {Question} from "../models/Question";

@Component({
  selector: 'app-game-page-test',
  templateUrl: './game-page-test.component.html',
  styleUrls: ['./game-page-test.component.css']
})
export class GamePageTestComponent implements OnInit {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @Input()  album!: Album;
  questionNumber: number = 1;
  correct: number = 0;

  preview: string = '';
  currentQuestion! : Question;
  selection: string = '';
  incorrect: number = 0;
  isFinished: boolean = false;
  questions!: Question[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.selection === this.currentQuestion.answer) {
      this.correct++;
    } else {
      this.incorrect++;
    }
    if (this.questionNumber === this.questions.length) {
      this.isFinished = true;
    } else {
      this.questionNumber++;
      this.updateCurrentQuestion(this.questionNumber - 1);
      this.updatePreview();
      this.audioPlayer.nativeElement.load();
      this.audioPlayer.nativeElement.play();
    }
  }

  updateCurrentQuestion(index: number) {
    this.currentQuestion = this.questions[index];
  }

  updatePreview() {
    this.preview = this.currentQuestion.preview;
  }

}
