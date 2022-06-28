import { IAddresses } from "./iaddresses";

export interface IPersons {
    lastName: string;
    phone: string;
    firstName: string;
    birthdate: Date;
    email: string;
    password: string;
    address: IAddresses;
    medicationList: string[];
    allergyList: string[];
}
