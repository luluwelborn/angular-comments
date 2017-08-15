import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
}

let comments = [
     {'message':"first comment!", 'author': 'unknown'},
     {'message': 'nice work!', 'author': 'unknown'},
     {'message': 'I would also like to congratulate you!', 'author': 'unknown'}
	];

	let newComment =[];

	newComment.map(item => {
		return {
			message:item.message,
			author:item.author
		}
	}).forEach(item => newComment.push(item));

console.log(newComment);