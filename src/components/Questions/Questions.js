import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className="questions-container">
            <div className='questions'>
                <h1>Answers of Questions</h1>
                <div className="answers">
                    <h3>01. How does react works?</h3>
                    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                    <br/>
                    <h3>02. What are the Difference between props and state?</h3>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                    <br/>
                    <h3>03. What's for useEffect use except load data?</h3>
                    <p>By using useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
                    <p>UseEffect run after every render. By default, it runs both after the first render and after every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;