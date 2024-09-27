import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'davisngl.com - thought repository',
    description: 'Will think about it',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./articles/*.{md,mdx}'),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}