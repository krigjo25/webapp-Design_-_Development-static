export function getMetadata(title: string, prefix: string = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<title>${title}</title>
<meta name="description" content="Kriss Design / Utvikling">
<meta name="author" content="Kriss Design / Utvikling">
<meta name="keywords" content="Design, Development, media">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="http://projectmedia.net23.net/pm/portfolio/favicon/pm.png" type="favicon/ico">`;
}
