import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveSettings(): void {
    const settings = {
      difficulty: (document.getElementById('difficulty') as HTMLSelectElement).value,
      timeLimit: parseInt((document.getElementById('time-limit') as HTMLInputElement).value),
      responseType: (document.querySelector('input[name="response-type"]:checked') as HTMLInputElement).value,
      genre: Array.from((document.getElementById('genre') as HTMLSelectElement).selectedOptions).map(option => option.value),
      hints: (document.querySelector('input[name="hints"]:checked') as HTMLInputElement)?.value || 'no'
    };

    this.userService.patchSettings(settings).subscribe({
      next: (response: any) => {
        console.log('Settings saved successfully.', response);
        // TODO : fixed position message that fades out?
      },
      error: error => {
        console.error('Failed to save settings.', error);
        console.log(error.message)
      }
    });
  }

}
