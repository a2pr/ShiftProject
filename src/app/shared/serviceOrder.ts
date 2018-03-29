import {Patient} from './patient';
import {Contract} from './contract';
import {Laboratory} from './laboratory';
import {Medic} from './medic';
export class ServiceOrder{
    id:string;
    date:Date;
    patient:Patient;
    contract:Contract;
    laboratory:Laboratory;
    medic:Medic;
}