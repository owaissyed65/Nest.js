import { Injectable, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './users.store';
import { MyStore } from './my.store';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
class Env_Config {
  env_type$: 'dev' | 'prod';
  constructor() {
    this.env_type$ = 'dev';
  }
}
const DEV_MODE = true;
@Module({
  controllers: [UsersController],
  // providers: [UserStore, { provide: MyStore,useExisting:UserStore }],
  // for passing dependency values
  // providers: [{ provide: 'Db_Name', useValue: 'HOW ARE YOU' }],
  providers: [
    {
      provide: 'Env_cofig',
      useFactory: (config: Env_Config, limit: number = 4) => {
        const EventBus$ =
          DEV_MODE && config.env_type$ === 'dev'
            ? new ReplaySubject(limit)
            : new BehaviorSubject(null);
        console.log(config.env_type$, limit);
        return EventBus$;
      },
      inject: [Env_Config, { token: 'LIMIT', optional: false }],
    },
    Env_Config,
    {
      provide: 'LIMIT',
      useValue: 2,
    },
  ],
})
export class AppModule {}
