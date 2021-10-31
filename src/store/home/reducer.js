
export const FEED_PAYLOAD = 'FEED_PAYLOAD';

const initialState = {
  feed: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FEED_PAYLOAD:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
