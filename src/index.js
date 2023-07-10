import App from './App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './app.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <BrowserRouter>  
                <QueryClientProvider client={queryClient}>
                    <div className='app'>
                        <App />
                    </div>
                </QueryClientProvider>
           </BrowserRouter>
)