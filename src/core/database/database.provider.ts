import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { UserModel } from 'src/modules/user/model/user.model';
import { TrainModel } from 'src/modules/train/model/train.model';
import { StationModel } from 'src/modules/station/model/station.model';
import { JourneyModel } from 'src/modules/journey/model/journey.model';
import { PaymentModel } from 'src/modules/payment/model/payment.model';
import { TripModel } from 'src/modules/trip/model/trip.model';
import { CoachDetailModel } from 'src/modules/coach_detail/model/coach_detail.model';
import { JourneyStopModel } from 'src/modules/journey_stop/model/journey_stop.model';
import { BookingModel } from 'src/modules/booking/model/booking.model';

export const databaseProviders = [{
    provide: SEQUELIZE,
   _useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
         case DEVELOPMENT:
            config = databaseConfig.development;
            break;
         case TEST:
            config = databaseConfig.test;
            break;
         case PRODUCTION:
            config = databaseConfig.production;
            break;
         default:
            config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([UserModel, TrainModel, PaymentModel, StationModel, JourneyModel, TripModel, CoachDetailModel, JourneyStopModel, BookingModel]);
      await sequelize.sync({
      });
      return sequelize.models;
   },
    get useFactory() {
       return this._useFactory;
    },
    set useFactory(value) {
       this._useFactory = value;
    },
}];