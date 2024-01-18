import { Repository } from 'typeorm';
import { TravelEntity } from '../entities/travel.entity';
import { RouteEntity } from '../entities/route.entity';
import { MaintenanceEntity } from '../entities/maintenance.entity';
import { EmployeeEntity } from '../entities/employee.entity';
import { EquipamentEntity } from '../entities/equipament.entity';

export interface ICreateTravelRepositories {
    travel: Repository<TravelEntity>;
    route: Repository<RouteEntity>;
    maintenance: Repository<MaintenanceEntity>;
    equipament: Repository<EquipamentEntity>;
    employee: Repository<EmployeeEntity>;
}
