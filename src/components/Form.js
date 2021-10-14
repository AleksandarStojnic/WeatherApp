import {useState} from 'react';
import Button from '@mui/material/Button';




function Form({ submitSearch }) {
    const [location, setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <Button type="submit" onClick={onSubmit} variant="contained" style={{height:20}}>
                SEARCH
            </Button>
        </form>
    
    );
}

export default Form;