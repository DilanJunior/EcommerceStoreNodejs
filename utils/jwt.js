import jwb from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecret';

export function createUserToken(payload){
    if (!payload || typeof payload ===! 'object') {
        throw new Error('El payload debe ser un objeto válido');
    }
    return jwb.sign(payload,JWT_SECRET, { expiresIn: '1h' });
}
 