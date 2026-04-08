import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionFilterComponent {
  year = '';

  @Output() yearSearch = new EventEmitter<string>();
  @Output() clearSearch = new EventEmitter<void>();

  onSearch(): void {
    this.yearSearch.emit(this.year.trim());
  }

  onClear(): void {
    this.year = '';
    this.clearSearch.emit();
  }
}