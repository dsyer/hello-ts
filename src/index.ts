export const sum = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;

export class Simple {
	payload: Uint8Array = new Uint8Array(0);
	headers: Map<string, string> = null;
}