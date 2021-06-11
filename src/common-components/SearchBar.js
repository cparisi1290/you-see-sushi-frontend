import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {

    const fetchSushiData = useSelector(state => state.sushiReducer.sushi)
    const fetchSashimiData = useSelector(state => state.sashimiReducer.sashimi)
    // const menuItems = [...fetchSushiData, ...fetchSashimiData]
    
    // const [filteredSushi, setFilteredSushi] = useState([]); 
    // const [filteredSashimi, setFilteredSashimi] = useState([]); 

    const [searchTerm, setSearchTerm] = useState('');

    const filterBySearchTerm = (array) => {
        return array.filter((items) => {
            if (items.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return items
            }
        }
        )
    }

    useEffect(() => {
        // setFilteredSushi(filterBySearchTerm())
        dispatch({type: 'SEARCH_SUSHI', payload: filterBySearchTerm(fetchSushiData)})
        dispatch({type: 'SEARCH_SASHIMI', payload: filterBySearchTerm(fetchSashimiData)})
    }, [searchTerm])

    const dispatch = useDispatch()

    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={event => {setSearchTerm(event.target.value)}}/>
                <Button variant="outline-light">Search</Button>
            </Form>

            {/* {filteredItem.map((searchTerm) => {
                return <div>{searchTerm.name}</div>
            })} */}

        </div>

    )
}

export default SearchBar;
