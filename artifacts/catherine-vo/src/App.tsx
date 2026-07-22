import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { PaletteToggle } from '@/components/palette-toggle';
import NotFound from '@/pages/not-found';
import Explore from '@/pages/explore';
import ThankYou from '@/pages/thank-you';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/home';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <PaletteToggle />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
