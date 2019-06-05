<svelte:head>
	<title>Michael Garten | Portfolio</title>
</svelte:head>

<h1>Portfolio</h1>

<h2>Links to some of my better examples</h2>
<ul>
	{#each projects as project}
	<li>
		<a href={project.href} target="_blank">{project.name}</a>
		<p>{project.description}</p>
	</li>
	{/each}
</ul>
<script>
	let projects = [
		{name: "Monaco Editor Playground", description: "Component IDE using Monaco Editor wrapped with Svelte 3, backed by Firestore realtime data", href:"https://fullstackvoyage.com"},
		{name: "Lit-Element Kanban-ish Board", description: "Some different list components and things using typescript and Lit-Element", href:"https://stackblitz.com/edit/lit-el-playground"},
		{name: "Lit-Element App Layout Components", description: "Example using a few components to create a very dynamic, configurable app layout", href:"https://codepen.io/mjgartendev/pen/eoqWwV"},
		{name: "Browser based IDE for bundling ES Modules (UI only)", description: "Layout only of my dream project. A reimagined, simplified, browser only development environment", href:"https://codepen.io/mjgartendev/full/zQOLqW"},
		{name: "Svelte CSS Grid Editor", description: "A super simple CSS Grid App Layout designer", href:"https://stackblitz.com/edit/svelte-dynagrid-rk12va"}

	]
</script>
