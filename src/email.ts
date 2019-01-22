import { Injectable } from '@angular/core';

export class InboxEmailMessage{

// constructor(title:string,content:string){
//     this.title = title,
//     this.content = content
// }

//     title:string;
//     content:string;

//równoznaczne z tym co wyżej
constructor(public title:string,public content:string){}
}


@Injectable()
export class EmailService{
    
}