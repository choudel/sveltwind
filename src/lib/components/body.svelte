<script lang="ts">
	import { browser } from '$app/env';
	import { KQL_GetAllUsersByUsername } from '$lib/graphql/_kitql/graphqlStores';

	$: browser && KQL_GetAllUsersByUsername.query();
</script>

<div class="container mx-auto p-3">
    <h2 class=" flex justify-center font-bold text-slate-200">{$KQL_GetAllUsersByUsername.data?.users?.edges[0].node?.username}</h2>
</div>
    

