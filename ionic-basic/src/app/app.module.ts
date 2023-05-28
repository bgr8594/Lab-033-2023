import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FloatMenuComponent } from './float-menu/float-menu.component';

@NgModule({
  declarations: [AppComponent, FloatMenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}