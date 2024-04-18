import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Album} from "../models/Album";
import {Question} from "../models/Question";
import {Expose} from "class-transformer";

@Component({
  selector: 'app-game-page-test',
  templateUrl: './game-page-test.component.html',
  styleUrls: ['./game-page-test.component.css']
})
export class GamePageTestComponent implements OnInit {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  @Input() currentQuestion! : Question;
  @Input() questions!: Question[];
  @Input() preview: string = "";
  @Input() album!: Album;

  @Output() isFinished: boolean = false;

  questionNumber: number = 1;
  incorrect: number = 0;
  correct: number = 0;
  selection: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log("Questions: ", this.questions);
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
