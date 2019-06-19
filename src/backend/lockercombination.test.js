import getPassword from './lockercombination';

test ('generate 5 digit password', () => {
    expect(getPassword(0,1,2,3,4,5,6,7,8,9)).toEqual('46628');
});