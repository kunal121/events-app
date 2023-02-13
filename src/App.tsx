import { EventProvider } from './components/context/EventContext';
import { EventList } from './components/eventList';
import { SelectedEventList } from './components/selectedEventList';
import './styles.css';

const App = () => {
    return (
        <EventProvider>
            <main className='app-container'>
                <EventList />
                <SelectedEventList />
            </main>
        </EventProvider>
    );
};

export default App;
