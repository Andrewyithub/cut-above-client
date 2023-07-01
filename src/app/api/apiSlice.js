import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logoutUser } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://cutaboveshop-api.fly.dev/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    if (refreshResult?.data) {
      console.log('apiSlice - refreshResult: ', refreshResult.data);
      const user = api.getState().auth.user;
      console.log('apiSlice - token : ', user);
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutUser());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Appointment', 'User'],
  endpoints: (builder) => ({}),
});
