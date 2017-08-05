import test from 'ava';
import m from './';

test(t => {
	t.is(m('0001101'), 0);
	t.is(m('1110010'), 0);
	t.is(m('0011001'), 1);
	t.is(m('1100110'), 1);
	t.is(m(''), undefined);
	t.is(m('1101'), undefined);
});
