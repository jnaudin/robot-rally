<script lang="ts">
	import PocketBase from 'pocketbase';

	// const pb = new PocketBase('http://127.0.0.1:8090/');
	const pb = new PocketBase('https://pocketbase.io');

	async function login(form: HTMLFormElement) {
		try {
			console.log(pb.authStore.token);
			console.log(pb.authStore.model?.id);
			console.log(pb);
			console.log(1);
			// await pb.collection('users').authWithOAuth2({ provider: 'google' });
			const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' });
			console.log(pb.authStore.isValid);
			console.log(pb.authStore.token);
			console.log(pb.authStore.model?.id);
			console.log('2:', authData);
			form.token.value = pb.authStore.token;
			console.log(3);
			form.submit();
		} catch (err) {
			console.error(err);
		}
	}
</script>

<form method="post" on:submit|preventDefault={(e) => login(e.currentTarget)}>
	<input name="token" type="hidden" />
	<button type="submit"> Login using Github </button>
</form>
