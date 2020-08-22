import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ReactTimeline from './react-timeline';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Render with empty list", () => {
    act(() => {
        render(<ReactTimeline list={[]}/>, container);
    });
    expect(container.textContent).toBe("Bad input");
});
