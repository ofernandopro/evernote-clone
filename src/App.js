import React, { Fragment } from 'react';
import { Notification, Section } from 'rbx';
import './App.scss';

const App = () => (
    <Fragment>
        <Section>
            <Notification color="success">
                JavaScript Notes
            </Notification>
        </Section>
    </Fragment>
)

export default App;

