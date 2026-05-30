export function getFooter(prefix: string = ''): string {
  return `<footer class="site-footer">
    <p>&copy; 2026 K – Design. All rights reserved.</p>
    <div class="footer-images">
      <img src="${prefix}assets/media/images/footer/Desert.jpg" alt="Desert">
      <img src="${prefix}assets/media/images/footer/Hydrangeas.jpg" alt="Hydrangeas">
      <img src="${prefix}assets/media/images/footer/Jellyfish.jpg" alt="Jellyfish">
    </div>
  </footer>`;
}
