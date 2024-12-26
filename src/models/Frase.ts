import { Schema, model } from 'mongoose';

interface IFrase {
    texto: string;
}

const fraseSchema = new Schema<IFrase>({
    texto: {
        type: String,
        required: true,
    },
});

const Frase = model<IFrase>('Frase', fraseSchema);

export default Frase;