import {Pacient} from './pacient';
import {Contract} from './contract';
import {Laboratory} from './laboratory';
import {Medic} from './medic';
export class ServiceOrder{
    id:string;
    date:Date;
    pacient:Pacient;
    contract:Contract;
    laboratory:Laboratory;
    medic:Medic;
}