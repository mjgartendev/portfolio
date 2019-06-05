<style>
	h1, h2, h3{
		font-weight: bold;
		text-align: center;
		margin: 0 auto;
	}
	h1 {
		font-size: 2.25em;
		margin-bottom: 1rem;
	}
	h2{
		font-size: 1.75em;
	}
	h3{
		font-size: 1.25em
	}
	p {

		margin: .5em auto;
	}
	ul{
		margin: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: flex-start;
	}
	li{
		list-style: none;
		padding: 1rem;
	}
	a.cta {
		margin: 2rem;
		padding: .75rem 1.25rem;
		font-size: 1.5rem;
		background: var(--primary);
		color: white;
		cursor: pointer;
		text-decoration: none;
		border-radius: var(--radius);
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 1rem;
	}
	@media (max-width: 576px) {
		ul{
			grid-template-columns: 1fr;
		}
	}
</style>

<svelte:head>
	<title>Michael Garten | Personal Site</title>
</svelte:head>

<section class="hero">
<h1>Hi! I'm Michael</h1>
<h2>Cloud Software Engineer Extraordinaire</h2>
<a class="cta" href="links">View links to stuff </a>
</section>
<section class="features">
<ul>
	<li>
		<h3>🌥️ Cloud Lover 🌩️</h3>
		<p>Local CLI's & IDE's are super cool, but cloud tools are the cat's meow. And cloud IDE's with container-backed CLI's are probably the bee's knees.</p>
		<p>I've done everything from .NET Core API deployments with custom logging and performance monitoring on Azure, AWS & Google Cloud, to headless CMS powered PWA's deployed all static and free basically anywhere.</p>
	</li>
	<li>
		<h3>💻 Web Developer 🌎</h3>
		<p>I've spent a lot of time debugging unpleasant applications in legacy environments. That's a lot of time nobody is getting back, and for that reason I'm obssessed with writing minimal-dependency, lightning-fast code.</p>
		<p>I'm an explorer of the native web platform and comfortable with any component based framework. Typescript, async/await, flat-maps, shadow dom, named slots, custom props, and css grid are all cool too.</p>
	</li>
	<li>
		<h3>👔 Corporate Survivor 💼</h3>
		<p>I have a Marketing Management degree and tons of years in personal sales, project management, and client-facing roles. I have a pretty good idea what gets the stakeholders out of bed in the morning.</p>
		<p>But please don't make me sell things. I'd rather spend time building something that sells itself.</p>
	</li>
</ul>
</section>