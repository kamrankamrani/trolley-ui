import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WEBSOCKET_URL } from "../Services/Defines";
import { webSocketSliceType } from "../Services/Types";

// const connectionStatus = {
//     [ReadyState.CONNECTING]: 'Connecting',
//     [ReadyState.OPEN]: 'Open',
//     [ReadyState.CLOSING]: 'Closing',
//     [ReadyState.CLOSED]: 'Closed',
//     [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
//   }[readyState];

const initialState: webSocketSliceType = {
  webSocketUrl: WEBSOCKET_URL,
  connectionStatus: -1,
};

const webSocketSlice = createSlice({
  name: "webSocketSlice",
  initialState,
  reducers: {
    setWebSocketConnectionStatus(state, action: PayloadAction<number>) {
      state.connectionStatus = action.payload;
    },
  },
});

export default webSocketSlice.reducer;
export const { setWebSocketConnectionStatus } = webSocketSlice.actions;
