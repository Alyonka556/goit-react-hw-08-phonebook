export const selectIsLoggin = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectIsRefresh = state => state.auth.isRefresh;
