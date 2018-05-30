const INITIAL_STATE = {
    contactName: 'daniel',
    contactEmail: 'mengzhou44@gmail.com',
    contactMessage: 'test message'
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}