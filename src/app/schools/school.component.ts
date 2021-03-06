import { Component, OnInit }  from '@angular/core';

import { SchoolService } from './school.service';

@Component({
    templateUrl: 'school.component.html'
})

export class SchoolComponent implements OnInit {

    errorMessage: string;

    school: any = {
		"departments": []
	};

	types = ["初中", "完中", "九年制", "小学", "十二年制", "补习", "其他", "高中"];
	
    constructor(private _schoolService: SchoolService) {

    }

    ngOnInit(): void {
		this.reload();
	}
	
	reload() {
		this.fetch((data) => {
			//cache the list
			console.log("data: " + JSON.stringify(data));
			this.school = data;
		});		
	}
	
	fetch(cb) {
		const req = new XMLHttpRequest();
		req.open('GET', 'http://47.92.53.57:8080/info/school/detail');
		//req.open('GET', 'assets/api/schools/school.json');

		req.onload = () => {
			cb(JSON.parse(req.response));
		};
		
		req.send();
	}
	
}
