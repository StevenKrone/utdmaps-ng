import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './-services/in-memory-data.service';

import { AppRoutingModule } from './app.routing';
import { provideRoutes, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BuildingComponent } from './-component/building/building.component';
import { ConstructionComponent } from './-component/construction/construction.component';
import { HousingComponent } from './-component/housing/housing.component';


import { BuildingService } from './-services/building.service';
import { HomeComponent } from './-component/home/home.component';
import { BuildinglistComponent } from './-component/buildinglist/buildinglist.component';
import { ParkingComponent } from './-component/parking/parking.component';
import { AbComponent } from './-component/pageofbuilding/ab/ab.component';
import { AdComponent } from './-component/pageofbuilding/ad/ad.component';
import { Ah1Component } from './-component/pageofbuilding/ah1/ah1.component';
import { Ah2Component } from './-component/pageofbuilding/ah2/ah2.component';
import { AtcComponent } from './-component/pageofbuilding/atc/atc.component';
import { BeComponent } from './-component/pageofbuilding/be/be.component';
import { BsbComponent } from './-component/pageofbuilding/bsb/bsb.component';
import { CbComponent } from './-component/pageofbuilding/cb/cb.component';
import { Cb1Component } from './-component/pageofbuilding/cb1/cb1.component';
import { Cb2Component } from './-component/pageofbuilding/cb2/cb2.component';
import { Cb3Component } from './-component/pageofbuilding/cb3/cb3.component';
import { CrComponent } from './-component/pageofbuilding/cr/cr.component';
import { CraComponent } from './-component/pageofbuilding/cra/cra.component';
import { DgaComponent } from './-component/pageofbuilding/dga/dga.component';
import { DhwComponent } from './-component/pageofbuilding/dhw/dhw.component';
import { EcsnnComponent } from './-component/pageofbuilding/ecsnn/ecsnn.component';
import { EcsssComponent } from './-component/pageofbuilding/ecsss/ecsss.component';
import { FaComponent } from './-component/pageofbuilding/fa/fa.component';
import { FmComponent } from './-component/pageofbuilding/fm/fm.component';
import { FnComponent } from './-component/pageofbuilding/fn/fn.component';
import { FoComponent } from './-component/pageofbuilding/fo/fo.component';
import { GcComponent } from './-component/pageofbuilding/gc/gc.component';
import { GrComponent } from './-component/pageofbuilding/gr/gr.component';
import { HhComponent } from './-component/pageofbuilding/hh/hh.component';
import { JoComponent } from './-component/pageofbuilding/jo/jo.component';
import { JsomComponent } from './-component/pageofbuilding/jsom/jsom.component';
import { McComponent } from './-component/pageofbuilding/mc/mc.component';
import { Ml1Component } from './-component/pageofbuilding/ml1/ml1.component';
import { Ml2Component } from './-component/pageofbuilding/ml2/ml2.component';
import { NbComponent } from './-component/pageofbuilding/nb/nb.component';
import { NlComponent } from './-component/pageofbuilding/nl/nl.component';
import { PdComponent } from './-component/pageofbuilding/pd/pd.component';
import { PhaComponent } from './-component/pageofbuilding/pha/pha.component';
import { PhyComponent } from './-component/pageofbuilding/phy/phy.component';
import { RcwComponent } from './-component/pageofbuilding/rcw/rcw.component';
import { RlComponent } from './-component/pageofbuilding/rl/rl.component';
import { RocComponent } from './-component/pageofbuilding/roc/roc.component';
import { RowComponent } from './-component/pageofbuilding/row/row.component';
import { SbComponent } from './-component/pageofbuilding/sb/sb.component';
import { SgComponent } from './-component/pageofbuilding/sg/sg.component';
import { SlcComponent } from './-component/pageofbuilding/slc/slc.component';
import { SpnComponent } from './-component/pageofbuilding/spn/spn.component';
import { Sp2Component } from './-component/pageofbuilding/sp2/sp2.component';
import { SsbComponent } from './-component/pageofbuilding/ssb/ssb.component';
import { SsaComponent } from './-component/pageofbuilding/ssa/ssa.component';
import { SuComponent } from './-component/pageofbuilding/su/su.component';
import { SufcComponent } from './-component/pageofbuilding/sufc/sufc.component';
import { ThComponent } from './-component/pageofbuilding/th/th.component';
import { VbcComponent } from './-component/pageofbuilding/vbc/vbc.component';
import { WstcComponent } from './-component/pageofbuilding/wstc/wstc.component';
import { P1Component } from './-component/pageofbuilding/p1/p1.component';
import { P2Component } from './-component/pageofbuilding/p2/p2.component';
import { P3Component } from './-component/pageofbuilding/p3/p3.component';
import { P5Component } from './-component/pageofbuilding/p5/p5.component';
import { P6Component } from './-component/pageofbuilding/p6/p6.component';
import { P8aComponent } from './-component/pageofbuilding/p8a/p8a.component';
import { P8Component } from './-component/pageofbuilding/p8/p8.component';
import { P9Component } from './-component/pageofbuilding/p9/p9.component';
import { RhnComponent } from './-component/pageofbuilding/rhn/rhn.component';
import { RhswComponent } from './-component/pageofbuilding/rhsw/rhsw.component';
import { RhwComponent } from './-component/pageofbuilding/rhw/rhw.component';
import { Ch6Component } from './-component/pageofbuilding/ch6/ch6.component';
import { Ch7Component } from './-component/pageofbuilding/ch7/ch7.component';
import { P4Component } from './-component/pageofbuilding/p4/p4.component';
import { P7Component } from './-component/pageofbuilding/p7/p7.component';
import { RhnwComponent } from './-component/pageofbuilding/rhnw/rhnw.component';
import { RhsComponent } from './-component/pageofbuilding/rhs/rhs.component';
import { RoutedisplayComponent } from './-component/routedisplay/routedisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    ConstructionComponent,
    HousingComponent,
    HomeComponent,
    BuildinglistComponent,
    ParkingComponent,
    AbComponent,
    AdComponent,
    Ah1Component,
    Ah2Component,
    AtcComponent,
    BeComponent,
    BsbComponent,
    CbComponent,
    Cb1Component,
    Cb2Component,
    Cb3Component,
    CrComponent,
    CraComponent,
    DgaComponent,
    DhwComponent,
    EcsnnComponent,
    EcsssComponent,
    FaComponent,
    FmComponent,
    FnComponent,
    FoComponent,
    GcComponent,
    GrComponent,
    HhComponent,
    JoComponent,
    JsomComponent,
    McComponent,
    Ml1Component,
    Ml2Component,
    NbComponent,
    NlComponent,
    PdComponent,
    PhaComponent,
    PhyComponent,
    RcwComponent,
    RlComponent,
    RocComponent,
    RowComponent,
    SbComponent,
    SgComponent,
    SlcComponent,
    SpnComponent,
    Sp2Component,
    SsbComponent,
    SsaComponent,
    SuComponent,
    SufcComponent,
    ThComponent,
    VbcComponent,
    WstcComponent,
    P1Component,
    P2Component,
    P3Component,
    P5Component,
    P6Component,
    P8aComponent,
    P8Component,
    P9Component,
    RhnComponent,
    RhswComponent,
    RhwComponent,
    Ch6Component,
    Ch7Component,
    P4Component,
    P7Component,
    RhnwComponent,
    RhsComponent,
    RoutedisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  // providers: [BuildingService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
