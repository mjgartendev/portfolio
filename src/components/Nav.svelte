<script>
	export let segment;
</script>

<style>
	nav {
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		background: #fff;
	}
	.selected {
		color: var(--primary, mediumseagreen);
	}
	a {
		text-decoration: none;
		padding: 1em;
	}
	.title{
		font-weight: bold;
		color: var(--primary, mediumseagreen);
		margin: 0 2rem;
	}
	@media(max-width: 576px ){
		.title {display: none;}
	}
</style>

<nav>
	<a rel=prefetch class='{segment === "links" ? "selected" : ""}' href='links'>links</a>
	<a rel=prefetch class='{segment === "resume" ? "selected" : ""}' href='resume'>resume</a>
	<a class='{segment === undefined ? "selected" : ""} title' href='.'>mjgartendev</a>
	<a rel=prefetch class='{segment === "portfolio" ? "selected" : ""}' href='portfolio'>portfolio</a>
	<a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</nav>