import { Injectable } from '@nestjs/common';
import { TrainDTO } from '../dto/train.dto';
import { TrainModel } from '../model/train.model';
import { BaseRepository } from 'src/base/base.repository';

@Injectable()
export class TrainRepository extends BaseRepository<TrainDTO, TrainModel> {

    // async findById(id: number): Promise<TrainModel> { 
    //     try {
    //         console.log('nothing');
    //         let trainModel: TrainModel = await this.database.TrainModel.findByPk(id);
    //         return trainModel;
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //         throw new Error(error.toString());
    //     }
    // }

    // async create(trainDTO: TrainDTO): Promise<TrainModel> {
    //     try {
    //         let trainModel: TrainModel = await TrainModel.create({ ...trainDTO});
    //         return trainModel;
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //         throw new Error(error.toString());
    //     }
    // }

    // async update(id: numberupdatedTrainDTO: TrainDTO): Promise<any> {
    //     try {
    //             await this.database.TrainModel.update({
    //             name: 'test'
    //         },{
    //            where: {
    //             id: updatedTrainDTO.id
    //            }
    //         }, { raw: true })
    //         // let trainModel: TrainModel = await this.findById(
    //         //     updatedTrainDTO.id
    //         // );
    //         // trainModel.name = updatedTrainDTO.name;
    //         // trainModel.save();
    //         // return trainModel;
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //         throw new Error(error.toString());
    //     }
    // }

    // async delete(id: number): Promise<void> {
    //     try {
    //         let train = await this.findById(id);
    //         if (train) {
    //             train.destroy();
    //             console.log('Train Deleted Successfully');
    //         } else {
    //             throw new Error("Train Doesn't Exist");
    //         }
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //         throw new Error(error.toString());
    //     }
    // }
}
