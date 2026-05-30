export function getOfflineStylesheets(prefix: string = ''): string {
  return `<link rel="shortcut icon" href="http://projectmedia.net23.net/pm/portfolio/favicon/pm.png" type="favicon/ico">
<link href="${prefix}assets/css/socialweblogo.css" rel="stylesheet" type="text/css" media="screen">
<link href="${prefix}assets/css/pageelement.css" rel="stylesheet" type="text/css" media="screen">`;
}
