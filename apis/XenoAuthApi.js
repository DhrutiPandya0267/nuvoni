import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const newSignUpPOST = (Constants, { txtemail, txtpassword }) =>
  fetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:jv_dxsiS/auth/nuvonisignup`, {
    body: JSON.stringify({ email: txtemail, password: txtpassword }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useNewSignUpPOST = ({ txtemail, txtpassword }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xgsf-8vnj-sqew.f2.xano.io/api:jv_dxsiS/auth/nuvonisignup`,
    {
      body: JSON.stringify({ email: txtemail, password: txtpassword }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchNewSignUpPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  txtemail,
  txtpassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xgsf-8vnj-sqew.f2.xano.io/api:jv_dxsiS/auth/nuvonisignup`,
    {
      body: JSON.stringify({ email: txtemail, password: txtpassword }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchNewSignUp: refetch });
};

export const newLoginPOST = (Constants, { txtemail, txtpassword }) =>
  fetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:jv_dxsiS/auth/nuvonilogin`, {
    body: JSON.stringify({ email: txtemail, password: txtpassword }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useNewLoginPOST = ({ txtemail, txtpassword }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xgsf-8vnj-sqew.f2.xano.io/api:jv_dxsiS/auth/nuvonilogin`,
    {
      body: JSON.stringify({ email: txtemail, password: txtpassword }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchNewLoginPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  txtemail,
  txtpassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://xgsf-8vnj-sqew.f2.xano.io/api:jv_dxsiS/auth/nuvonilogin`,
    {
      body: JSON.stringify({ email: txtemail, password: txtpassword }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchNewLogin: refetch });
};
