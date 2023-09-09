import { Component, Input } from '@angular/core';
import { abilityTableFields } from 'src/app/constants/table-fields/ability-table-fields.const';
import { DisplayColumnNameType } from 'src/app/helpers/display-column-names-type.helper';
import { Ability } from 'src/app/interfaces/ability.interface';

@Component({
    selector: 'app-ability-table',
    templateUrl: './ability-table.component.html',
    styleUrls: ['./ability-table.component.scss']
})
export class AbilityTableComponent {
    @Input() dataSource: Ability[] = [];
    public displayColumns: string[] = abilityTableFields;
    public displayColumnNames: DisplayColumnNameType<typeof this.displayColumns>;

    constructor() {
        this.displayColumnNames = { name: 'Name', effect: 'Effect' };
    }
}

