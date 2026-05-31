export function getMetadata(title: string, prefix: string = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<meta name="description" content="Kriss Design / Utvikling">
<meta name="author" content="Kriss Design / Utvikling">
<meta name="keywords" content="Design, Development, media">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="/portfolio/favicon/pm.png" type="favicon/ico">
<link href="${prefix}assets/sass/index.css" rel="stylesheet" type="text/css" media="screen">
</head>
`;
}
