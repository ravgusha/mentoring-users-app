import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsFacade } from '@users/materials/data-access';
import { MaterialsListComponent } from '../..';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'users-materials-list-container',
  standalone: true,
  imports: [CommonModule, LetDirective, MaterialsListComponent],
  templateUrl: './materials-list-container.component.html',
  styleUrls: ['./materials-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsListContainerComponent implements OnInit {
  ngOnInit(): void {
    this.MaterialsFacade.loadMaterials();
  }

  public MaterialsFacade = inject(MaterialsFacade);
  public readonly folders$ = this.MaterialsFacade.allFolders$;
  public readonly currentFolder$ = this.MaterialsFacade.allFolders$;
  public readonly currentMaterials$ = this.MaterialsFacade.currentMaterials$;
}
