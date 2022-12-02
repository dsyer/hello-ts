import test from 'ava';

import { sum, subtract } from '../src/index.js';

test("testing", t => {
    t.true(1 > 0);
});

test("add", t => {
    t.is(sum(1, 2), 3);
});

test("minus", t => {
    t.is(subtract(3, 2), 1);
});
