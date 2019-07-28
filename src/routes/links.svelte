<h1>Links</h1>
<ul>
  {#each links as link}
  <a href={link.href} alt={link.description} target="_blank">
    <span class="{link.icon}"></span> {link.name}
  </a>
  <p>{link.description}</p>
  <hr>
  {/each}
</ul>

<script>
  let links = [
    {name: "github", href: "https://github.com/mjgartendev", icon: "fab fa-github", description: "My github profile. Stick to the pinned repos, beware the rest"},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/mjgarten/", icon: "fab fa-linkedin", description: "Contact me here"},
    {name: "Codepen", href: "https://codepen.io/mjgartendev", icon: "fab fa-codepen", description: "A bunch of random samples of things I've been playing around with"},
    {name: "SveltePlayground", href: "https://svelte-playground.web.app", icon: "fas fa-user-astronaut", description: "A side project of mine; An IDE for sharing code snippets and tutorials."},
    {name: "Online Resume", href:"https://mjgartendev.github.io/", icon: "fas fa-briefcase", description: "An HTML version of my resume, hosted on Github"} 
  ]
</script>

<style>
  a{
    font-size: 1.5rem;
    color: var(--primary);
  }
  p{
    font-weight: bold;
  }
</style>
