// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
        interface Locals {
            pb: PocketBase;
            id: string;
            email: string;
        }
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
