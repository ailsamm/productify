import React from 'react';
import ReactDOM from 'react-dom';
import TeamMember from './TeamMember';

it('renders without crashing', () => {
    const member = {
        first_name: "Testee",
        last_name: "Test",
        job_title: "Tester"
    }
    const div = document.createElement('div');
    ReactDOM.render(<TeamMember member={member}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});