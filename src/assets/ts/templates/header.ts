export function getHeader(prefix: string = ''): string {
  return `<header class="header">
<div class="weblogo">
<a href="${prefix}index.html">
<img src="http://projectmedia.net23.net/pm/portfolio/logo/weblogo/k-mobile.png" alt="k-design/development">
</a>
</div>
</a>
</div>
</header>
<nav>
  <ul>
  <a class="link" href="${prefix}index.html">
    <li>
      <i class="news"></i>
    <h4>News</h4>
    </li>
    </a>
    <a class="link" href="${prefix}about.html">
    <li>
      <i class="about"></i>
    <h4>About us</h4>
    </li>
    </a>
    <a class="link" href="${prefix}portfolio.html">
    <li>
      <i class="port"></i>
    <h4>Portfolio</h4>
    </li>
    </a>
  </ul>
</nav>`;
}
