<script>
	import '../app.css';
</script>

<header>
	<nav class="container flex gap-10">
		<div class="flex basis-1/3">
			<img src="sensei logo.svg" alt="sensei" /><span>EL SENSEI</span>
		</div>

		<ul class=" flex basis-1/3 gap-10">
			<li class="cursor-pointer">Features</li>
			<li class="cursor-pointer">Pricing</li>
			<li class="cursor-pointer">Contact</li>
			<button type="button" class="bg-ted text-white px-7 py-3 uppercase rounded-md left-2">login</button>
		</ul>
	</nav>
</header>
<slot />
