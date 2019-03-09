import config from './config';

export default async () => {
    try {
        const args = `?key=${config.key}&format=json`
        const res = await fetch(`${config.url}/pet.getRandom`)
        console.log(res)
    } catch (err) {

    }

    return
}