import { atom } from 'jotai';

// Atom til at holde inputværdien, som brugeren indtaster
export const inputValueAtom = atom<string>('');

// Atom til at holde brugerens valgte inputbase (f.eks. decimal, binær eller hex)
export const inputBaseAtom = atom<string>('10'); // Default værdi er Decimal (Base 10)

// Atom til at holde brugerens valgte outputbase
export const outputBaseAtom = atom<string>('2'); // Default værdi er Binary (Base 2)

// Atom til at holde resultatet af konverteringen
export const convertedValueAtom = atom<string>('');
