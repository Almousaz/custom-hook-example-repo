import logo from './logo.svg';
import './App.css';
import { QueryClient , QueryClientProvider } from 'react-query';
import { Cat } from './cat';



function App() {

    const client = new QueryClient({
      defaultOptions : {
        queries : { refetchOnWindowFocus : true}
      }
    }) 
  return (
    <div className="App">
      <QueryClientProvider client={client}>

        <Cat />

      </QueryClientProvider>
      
    </div>
  );
}

export default App;
