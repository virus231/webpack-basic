import _ from 'lodash';
import printMe from './print.js';


async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');

    return import('lodash')
        .then(({default: _}) => {
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');


            return element;
        }).catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
    document.body.appendChild(component);
});