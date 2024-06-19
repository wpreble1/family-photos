import { Button } from '@family-photos/ui/src/Core/Button';
import { i18n } from '@family-photos/ui/src/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 15000,
        },
    },
});

export function App() {
    const { t } = useTranslation();

    return (
        <HelmetProvider>
            <I18nextProvider i18n={i18n}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <h1>{t('family.photos')}</h1>
                        <Button />
                    </BrowserRouter>
                    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                </QueryClientProvider>
            </I18nextProvider>
        </HelmetProvider>
    );
}
