import getPassword from './locker-combination';

test('generate 5 digit password', () => {
    expect(getPassword()).toEqual('46628');
});