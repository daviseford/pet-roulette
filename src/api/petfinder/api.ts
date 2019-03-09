import config from './config';
import axios from 'axios';
import Queryize from '../util/query_params';
const jsonpAdapter = require('axios-jsonp');

export interface PetFinderAPIGetPet {
    age: { $t: "Baby" | "Young" | "Adult" | "Senior" }
    animal: { $t: "Cat" | "Dog" }
    breeds: {
        breed: {}
        contact: { phone: {}, state: {}, address2: {}, email: {}, city: {}, }
        description: { $t: string }
        id: { $t: string } // "43911061"
        lastUpdate: { $t: string } // "2019-02-01T02:15:09Z"
        media: { photos: {} }
        mix: { $t: "yes" | "no" }
        name: { $t: string }
        options: { option: [] }
        sex: { $t: "M" | "F" }
        shelterId: { $t: string }
        shelterPetId: { $t: string } // "ps_56091958"
        size: { $t: "L" | "S" | "M" | "XL" }
        status: { $t: "A" }
    }
}

export const getPet = async (id: number): Promise<PetFinderAPIGetPet | null> => {
    try {
        const url = `${config.url}/pet.get${Queryize({ key: config.key, id, format: 'json' })}`
        const res = await axios({ url, adapter: jsonpAdapter, })
        return res.data.petfinder.pet
    } catch (err) {
        console.error(err)
        return null
    }
}

export const getRandomPet = async (): Promise<number> => {
    try {
        const url = `${config.url}/pet.getRandom${Queryize({ key: config.key, format: 'json' })}`
        const res = await axios({ url, adapter: jsonpAdapter, })
        return res.data.petfinder.petIds.id.$t
    } catch (err) {
        console.error(err)
        return 0
    }
}