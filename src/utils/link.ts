export function getLinkTarget(link: string) {
  return link.includes('http') ? '_blank' : '_self'
}

export function isExternalLink(link: string) {
  return link.includes('http')
}
