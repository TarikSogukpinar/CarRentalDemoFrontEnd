export interface CustomerDetails {
    id:number,
    customerId: number;
    userId: number;
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    status:boolean;
    passwordHash: string;
    passwordSalt: string;
    customerFindexPoint:number;
}