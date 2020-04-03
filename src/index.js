import "dotenv/config";
import { getApi, sendApi } from "./services/api";
import decrypt from "./services/decrypt";
import sha1 from "./services/sha1";
import fs from "fs";

class App {
    constructor() {
        this.execProcess()
    }

    async execProcess() {
        try {
            let json = await getApi();
            json.decifrado = decrypt(json.cifrado, json.numero_casas);
            json.resumo_criptografico = sha1(json.decifrado);
 
            fs.writeFileSync('answer.json', JSON.stringify(json, null, 4));

        } catch (error) {
            console.log(error)
            console.error("An error occurred during the process. Try again or contact the developer");
        }
    }
}

new App();



