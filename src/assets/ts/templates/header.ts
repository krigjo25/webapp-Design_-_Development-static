import { getMetadata } from './metadata';


export function getHeader(prefix: string = '', title: string = 'Kriss Design / Utvikling'): string {
  return `
${getMetadata(title, prefix)}
<body>
  <header class="header">
    <div class="weblogo">
      <a href="${prefix}index.html">
        <img src="${prefix}assets/media/vector/logo/weblogo/k-design-utvikling.png" alt="k-design/utvikling">
      </a>
    </div>
    <nav>
    <ul>
    <a class="link" href="${prefix}index.html">
      <li>
        <img src="${prefix}assets/media/vector/icons/nav/news.svg" class="news" alt="Nyheter">
      <h4>Nyheter</h4>
      </li>
      </a>
      <a class="link" href="${prefix}about.html">
      <li>
        <img src="${prefix}assets/media/vector/icons/nav/aboutus.svg" class="about" alt="Om meg">
      <h4>Om meg</h4>
      </li>
      </a>
      <a class="link" href="${prefix}portfolio.html">
      <li>
        <img src="${prefix}assets/media/vector/icons/nav/portfolio.svg" class="port" alt="Portefølje">
      <h4>Portefølje</h4>
      </li>
      </a>
    </ul>
  </nav>
</header>`;
}
