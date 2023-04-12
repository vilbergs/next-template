export async function getMessages(locale: string, namespaces: string[]) {
  const messages = (await import(`./messages/${locale}.json`)).default

  return namespaces.reduce<Record<string, string>>((all, ns) => {
    all[ns] = messages[ns]
    return all
  }, {})
}
