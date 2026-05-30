export function getHeader(prefix: string = ''): string {
  return `<header class="header">
<div class="weblogo">
<a href="${prefix}index.html">
<img src="${prefix}assets/media/images/logo/weblogo/k-mobile.png" alt="k-design/development">
</a>
</div>
</a>
</div>
</header>
<nav>
  <ul>
  <a class="link" href="${prefix}index.html">
    <li>
      <img src="${prefix}assets/media/images/nav/news.svg" class="news" alt="News">
    <h4>News</h4>
    </li>
    </a>
    <a class="link" href="${prefix}about.html">
    <li>
      <img src="${prefix}assets/media/images/nav/aboutus.svg" class="about" alt="About us">
    <h4>About us</h4>
    </li>
    </a>
    <a class="link" href="${prefix}portfolio.html">
    <li>
      <img src="${prefix}assets/media/images/nav/portfolio.svg" class="port" alt="Portfolio">
    <h4>Portfolio</h4>
    </li>
    </a>
  </ul>
</nav>`;
}
