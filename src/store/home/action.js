export const FEED_PAYLOAD = 'FEED_PAYLOAD';


export const getFeedPayload = (data) = (dispatch) => {
   return dispatch({
      type: FEED_PAYLOAD,
      payload: data,
   });
}