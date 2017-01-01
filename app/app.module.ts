import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CardComponent } from './card/card.component';
import { JsonpModule, HttpModule } from '@angular/http';
import { WeatherComponent } from './weather-widget/component/weather.component';
import { SpeedUnitPipe } from './weather-widget/pipe/speed-unit.pipe';
import { TemperatureUnitPipe } from './weather-widget/pipe/temperature-unit.pipe';

@NgModule({
    imports:      [ BrowserModule, FormsModule, JsonpModule, HttpModule ],
    declarations: [ AppComponent, CardComponent, WeatherComponent, SpeedUnitPipe, TemperatureUnitPipe ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }