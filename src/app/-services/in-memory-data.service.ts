import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BuildingService } from './building.service';
import {Building} from '../-class/building';
//import { xyarea } from '../-class/xyarea';

export class InMemoryDataService implements InMemoryDbService {

    //space: xyarea;

  createDb() {

   

    //Turn into space engine... hah, space engine.
      // this.space.max_x = 100;
      // this.space.min_x = 100;
      // this.space.max_y = 100;
      // this.space.max_y = 100;
      
      // console.log(this.space.max_x);
      // console.log(this.space.min_x);
      // console.log(this.space.max_y);
      // console.log(this.space.max_y);

      // const building = [
      //     {id: 1, name: 'JSOM', clkDim: this.space   },
      //     {id: 2, name: 'ECS', clkDim: this.space   },
      //     {id: 3, name: 'McDermott', clkDim: this.space   }, 
      //     {id: 4, name: 'Cecil Green', clkDim: this.space   }  

      // ];

            const building = [
          {id: 1, name: 'JSOM'  },
          {id: 2, name: 'ECS'  },
          {id: 3, name: 'McDermott'   }, 
          {id: 4, name: 'Cecil Green'  }  

      ];




    return { building };

  }
}