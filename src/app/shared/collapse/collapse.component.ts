import { Component, OnInit, Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.css'],
})
export class CollapseComponent implements OnInit {
    @Input() title: string;
    visible: boolean = true;

    constructor() { }

    ngOnInit() {
    }

    toggleContent() {
        this.visible = !this.visible;
    }

}
