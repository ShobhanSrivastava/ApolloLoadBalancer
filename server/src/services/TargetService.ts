import { Types } from 'mongoose';
import { Target } from '../models';

class TargetService {
    static async getTargets() {
        return await Target.find();
    }

    static async createTarget({ host, port, health_endpoint, name }) {
        const target = new Target({ host, port, health_endpoint, name });
        await target.save();

        return true;
    }

    static async updateTarget(id: Types.ObjectId, updateObject: Object) {
        try {
            await Target.findByIdAndUpdate(id, updateObject);
            return { created: true, };
        } catch(error) {
            return { created: false, error };
        }
    }
}