/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface Product {
    name: string;
    img: string;
    ref: string;
    price: number;
}