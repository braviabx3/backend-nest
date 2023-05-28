import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';



@Module({
  controllers: [],
  providers: [],
  imports:[
    ConfigModule.forRoot(),

    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }),
    AuthModule]
})
export class AppModule {

//   constructor()
// {
//   console.log(process.env)
// }
}
  