import { EStatus } from "./estatus";
import { EType } from "./etype";
import { IAddresses } from "./iaddresses";
import { IFirestations } from "./ifirestations";

export interface IAlerts {
    num: string;
    description: string;
    created_at: Date;
    statusEnum: EStatus;
    typeEnum: EType;
    address: IAddresses;
    personList: string[];
    fireStation: IFirestations;

}
