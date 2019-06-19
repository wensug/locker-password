import getPassword from './locker-combination';

test('generate 5 digit password', () => {
    let numbers = getPassword();
    expect(numbers).toEqual('46628');
});