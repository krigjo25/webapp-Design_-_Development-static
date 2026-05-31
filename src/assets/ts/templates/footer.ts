export function getFooter(prefix: string = ''): string {
  return `<footer class="site-footer">
    <div class="social-icons">
      <a href="#" class="social fb" title="Facebook"></a>
      <a href="#" class="social insta" title="Instagram"></a>
      <a href="#" class="social ello" title="Ello"></a>
    </div>
    <p>&copy; 2014 K – Design. All rights reserved. | <a href="${prefix}ninjajs/ninja-script.html">Quiz Ninja</a></p>
    </footer>
  </body>
  </html>`;
}
