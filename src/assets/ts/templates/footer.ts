import { TemplateFunction } from '../../../types/template';

export const getFooter: TemplateFunction = (prefix: string = ''): string => {
  return `<footer class="site-footer">
    <div class="social-icons">
      <a href="#" class="social fb" title="Facebook"></a>
      <a href="#" class="social insta" title="Instagram"></a>
      <a href="#" class="social ello" title="Ello"></a>
    </div>
    <p>&copy; 2014 K – Design. Alle rettigheter forbeholdt. | <a href="${prefix}ninjajs/ninja-script.html">Quiz Ninja</a></p>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script type="module" src="${prefix}assets/ts/components/menu.js"></script>
  </body>
  </html>`;
}
