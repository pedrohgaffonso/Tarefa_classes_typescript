// Import stylesheets
import './style.css';
import { Person } from './person';

let me: Person = new Person();
me.firstname = 'Pedro';
me.middlename = 'Henrique Garcia';
me.lastname = 'Affonso';
me.age = 27;
me.email.push('pedrohgaffonso@gmail.com');
me.email.push('pedro.affonso.77@gmail.com');

const appname: HTMLElement = document.getElementById('person-name');
appname.innerHTML = me.getFullName();
const appmail: HTMLElement = document.getElementById('person-emails');
appmail.innerHTML = me.email.toString();
const appage: HTMLElement = document.getElementById('person-age');
appage.innerHTML = me.age.toString();
const appyear: HTMLElement = document.getElementById('person-birthday');
appyear.innerHTML = me.getBirtdayYear().toString();
