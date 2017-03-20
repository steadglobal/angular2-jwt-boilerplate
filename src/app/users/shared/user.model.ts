export class User {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isAdmin : boolean = false;
    createdOn : Date;
    constructor(values: Object = {}) {
	    Object.assign(this, values);
	}
}