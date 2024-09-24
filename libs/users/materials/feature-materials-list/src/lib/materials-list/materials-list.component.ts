import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsCardComponent } from '../materials-card/materials-card.component';
import { MaterialsListVM } from './materials-list-view-model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'users-materials-list',
  standalone: true,
  imports: [CommonModule, MaterialsCardComponent, MatIconModule, MatButtonModule],
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MaterialsListComponent {
  @Input({ required: true }) vm!: MaterialsListVM;
  @Output() deleteMaterial = new EventEmitter();
  @Output() backToFolders = new EventEmitter();

  onDeleteMaterial(materialId: number) {
    this.deleteMaterial.emit(materialId);
  }

  public onBackToFolders(): void {
    this.backToFolders.emit();
  }
}