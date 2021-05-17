import React from 'react';
import { getByAltText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import within from '@testing-library/dom';
import Display from './../Display';
import Show from './../Show';

const testShow = {
    //add in approprate test data structure here.
    name: 'Coop & the Dudes',
    summary: 'Coop ventures forth with the dudes in this coop-filled venture.',
    seasons: [{
        id: 1,
        name: 'Season 1',
        episodes: []
    },
    {
        id: 2,
        name: 'Season 2',
        episodes: []
    },
    {
        id: 3,
        name: 'Season 3',
        episodes: []
    }]
}

test('renders Dsiplay without errors', ()=>{ 
    render(<Display/>)
})

test('tests that fetch button will display Show when pressed', () => {
    render(<Display/>)
    let button = screen.getByText(/press to get show data/i)
    userEvent.click(button)
    screen.queryByTestId('show-container')
})

test('tests that fetch button will display Show when pressed', () => {
    render(<Display show={testShow}/>)
    let button = screen.getByText(/press to get show data/i)
    userEvent.click(button)
    screen.queryByTestId('show-container')

})

test('tests that fetch button will display Show when pressed and dropdown options are equal to dummy', async () => {
	const testFunc = jest.fn();

	render(<Display displayFunc={testFunc} />);

	const button = screen.getByRole('button');

	userEvent.click(button);

	await waitFor(() => {
		expect(testFunc).toBeCalledTimes(1);
	});
});











///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.