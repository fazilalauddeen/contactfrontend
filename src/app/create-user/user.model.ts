export class User {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    address?: string;
    tags: string;
  
    constructor(
      firstname: string = '',
      lastname: string = '',
      email: string = '',
      mobile: string = '',
      tags: string = '',
      address: string = ''
    ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.mobile = mobile;
      this.tags = tags;
      this.address = address;
    }
  }
  