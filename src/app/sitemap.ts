import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thefirstprinciple.app';

    // Core Pages
    const routes = [
        '',
        '/foundations',
        '/logic',
        '/epistemology',
        '/metaphysics',
        '/god',
        '/science',
        '/science/astronomy',
        '/science/quantum',
        '/science/biology',
        '/science/myths',
        '/ethics',
        '/answers',
        '/applied',
        '/applied/liberalism',
        '/history',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
