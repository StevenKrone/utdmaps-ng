import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingComponent  } from './-component/building/building.component';
import { ConstructionComponent } from './-component/construction/construction.component';
import { HousingComponent } from './-component/housing/housing.component';
import { HomeComponent } from './-component/home/home.component';
import { ParkingComponent } from './-component/parking/parking.component';

import { AbComponent} from './-component/pageofbuilding/ab/ab.component';
import { AdComponent} from './-component/pageofbuilding/ad/ad.component';
import { Ah1Component} from './-component/pageofbuilding/ah1/ah1.component';
import { Ah2Component} from './-component/pageofbuilding/ah2/ah2.component';
import { AtcComponent} from './-component/pageofbuilding/atc/atc.component';
import { BeComponent} from './-component/pageofbuilding/be/be.component';
import { BsbComponent} from './-component/pageofbuilding/bsb/bsb.component';
import { CbComponent} from './-component/pageofbuilding/cb/cb.component';
import { Cb1Component} from './-component/pageofbuilding/cb1/cb1.component';
import { Cb2Component} from './-component/pageofbuilding/cb2/cb2.component';
import { Cb3Component} from './-component/pageofbuilding/cb3/cb3.component';
import { CrComponent} from './-component/pageofbuilding/cr/cr.component';
import { CraComponent} from './-component/pageofbuilding/cra/cra.component';
import { DgaComponent} from './-component/pageofbuilding/dga/dga.component';
import { DhwComponent} from './-component/pageofbuilding/dhw/dhw.component';
import { EcsnnComponent} from './-component/pageofbuilding/ecsnn/ecsnn.component';
import { EcsssComponent} from './-component/pageofbuilding/ecsss/ecsss.component';
import { FaComponent} from './-component/pageofbuilding/fa/fa.component';
import { FmComponent} from './-component/pageofbuilding/fm/fm.component';
import { FnComponent} from './-component/pageofbuilding/fn/fn.component';
import { FoComponent} from './-component/pageofbuilding/fo/fo.component';
import { GcComponent} from './-component/pageofbuilding/gc/gc.component';
import { GrComponent} from './-component/pageofbuilding/gr/gr.component';
import { HhComponent} from './-component/pageofbuilding/hh/hh.component';
import { JoComponent} from './-component/pageofbuilding/jo/jo.component';
import { JsomComponent} from './-component/pageofbuilding/jsom/jsom.component';
import { McComponent} from './-component/pageofbuilding/mc/mc.component';
import { Ml1Component} from './-component/pageofbuilding/ml1/ml1.component';
import { Ml2Component} from './-component/pageofbuilding/ml2/ml2.component';
import { NbComponent} from './-component/pageofbuilding/nb/nb.component';
import { NlComponent} from './-component/pageofbuilding/nl/nl.component';
import { PdComponent} from './-component/pageofbuilding/pd/pd.component';
import { PhaComponent} from './-component/pageofbuilding/pha/pha.component';
import { PhyComponent} from './-component/pageofbuilding/phy/phy.component';
import { RcwComponent} from './-component/pageofbuilding/rcw/rcw.component';
import { RlComponent} from './-component/pageofbuilding/rl/rl.component';
import { RocComponent} from './-component/pageofbuilding/roc/roc.component';
import { RowComponent} from './-component/pageofbuilding/row/row.component';
import { SbComponent} from './-component/pageofbuilding/sb/sb.component';
import { SgComponent} from './-component/pageofbuilding/sg/sg.component';
import { SlcComponent} from './-component/pageofbuilding/slc/slc.component';
import { SpnComponent} from './-component/pageofbuilding/spn/spn.component';
import { Sp2Component} from './-component/pageofbuilding/sp2/sp2.component';
import { SsbComponent} from './-component/pageofbuilding/ssb/ssb.component';
import { SsaComponent} from './-component/pageofbuilding/ssa/ssa.component';
import { SuComponent} from './-component/pageofbuilding/su/su.component';
import { SufcComponent} from './-component/pageofbuilding/sufc/sufc.component';
import { ThComponent} from './-component/pageofbuilding/th/th.component';
import { VbcComponent} from './-component/pageofbuilding/vbc/vbc.component';
import { WstcComponent} from './-component/pageofbuilding/wstc/wstc.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
   { path: 'building', component: BuildingComponent  },
   { path: 'construction', component: ConstructionComponent},
   { path: 'housing',     component: HousingComponent },
   { path: 'parking',     component: ParkingComponent },

  //Routing Lists of Building Pages
  { path: 'building/AB', component: AbComponent  },
  { path: 'building/AD', component: AdComponent  },
  { path: 'building/AH1', component: Ah1Component  },
  { path: 'building/AH2', component: Ah2Component  },
  { path: 'building/ATC', component: AtcComponent  },
  { path: 'building/BE', component: BeComponent  },
  { path: 'building/BSB', component: BsbComponent  },
  { path: 'building/CB', component: CbComponent  },
  { path: 'building/CB1', component: Cb1Component  },
  { path: 'building/CB2', component: Cb2Component  },
  { path: 'building/CB3', component: Cb3Component  },
  { path: 'building/CR', component: CrComponent  },
  { path: 'building/CRA', component: CraComponent  },
  { path: 'building/DGA', component: DgaComponent  },
  { path: 'building/DHW', component: DhwComponent  },
  { path: 'building/ECSNN', component: EcsnnComponent  },
  { path: 'building/ECSSS', component: EcsssComponent  },
  { path: 'building/FA', component: FaComponent  },
  { path: 'building/FM', component: FmComponent  },
  { path: 'building/FN', component: FnComponent  },
  { path: 'building/FO', component: FoComponent  },
  { path: 'building/GC', component: GcComponent  },
  { path: 'building/GR', component: GrComponent  },
  { path: 'building/HH', component: HhComponent  },
  { path: 'building/JO', component: JoComponent  },
  { path: 'building/JSOM', component: JsomComponent  },
  { path: 'building/MC', component: McComponent  },
  { path: 'building/ML1', component: Ml1Component  },
  { path: 'building/ML2', component: Ml2Component  },
  { path: 'building/NB', component: NbComponent  },
  { path: 'building/NL', component: NlComponent  },
  { path: 'building/PD', component: PdComponent  },
  { path: 'building/PHA', component: PhaComponent  },
  { path: 'building/PHY', component: PhyComponent  },
  { path: 'building/RCW', component: RcwComponent  },
  { path: 'building/RL', component: RlComponent  },
  { path: 'building/ROC', component: RocComponent  },
  { path: 'building/ROW', component: RowComponent  },
  { path: 'building/SB', component: SbComponent  },
  { path: 'building/SG', component: SgComponent  },
  { path: 'building/SLC', component: SlcComponent  },
  { path: 'building/SPN', component: SpnComponent  },
  { path: 'building/SP2', component: Sp2Component  },
  { path: 'building/SSB', component: SsbComponent  },
  { path: 'building/SSA', component: SsaComponent  },
  { path: 'building/SU', component: SuComponent  },
  { path: 'building/SUFC', component: SufcComponent  },
  { path: 'building/TH', component: ThComponent  },
  { path: 'building/VBC', component: VbcComponent  },
  { path: 'building/WSTC', component: WstcComponent  }



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}