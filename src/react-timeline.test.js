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

it("Render incorrect list", () => {
    act(() => {
        render(<ReactTimeline list={[]}/>, container);
    });
    expect(container.textContent).toBe("Bad input");

    act(() => {
        render(<ReactTimeline list={[{key:1, text:"First", completed: false, actual:true},{key:2, text:"Second", completed: false, actual:true}]}/>, container);
    });
    expect(container.textContent).toBe("Bad input");
});

it("Render correct list", () => {
    act(() => {
        render(<ReactTimeline list={[{key:1, text:"First", completed: false, actual:true},{key:2, text:"Second", completed: false, actual:false}]}/>, container);
    });
    expect(container.textContent).toBe("FirstSecond");
});