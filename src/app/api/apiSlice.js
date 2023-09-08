import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logoutUser } from '../../features/auth/authSlice';
import { LocalFireDepartment } from '@mui/icons-material';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001',
  // baseUrl: 'https://cutaboveshop.fly.dev',
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
  // ! Changed from 403
  if (result?.error?.originalStatus === 401) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
      console.log('====================================');
      console.log('result of refreshing: ', result);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('logging out');
      console.log('====================================');
      api.dispatch(logoutUser());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Appointment', 'Employee', 'Schedule', 'User'],
  endpoints: (builder) => ({}),
});
