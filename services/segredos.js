import { createSecretKey } from 'crypto';

export const segredo = "onossosegredodoJWT"

export const segredoDoJWT = createSecretKey(segredo,
    'utf-8');