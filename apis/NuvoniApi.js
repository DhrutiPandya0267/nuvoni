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

export const countryListGET = Constants =>
  fetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/countries`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useCountryListGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['countries', args], () => countryListGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchCountryListGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useCountryListGET(
    {},
    { refetchInterval }
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

  return children({ loading, data, error, refetchCountryList: refetch });
};

export const getInvoiceGET = Constants =>
  fetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/invoices`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetInvoiceGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['get all invoices', args],
    () => getInvoiceGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetInvoiceGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetInvoiceGET(
    {},
    { refetchInterval }
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

  return children({ loading, data, error, refetchGetInvoice: refetch });
};

export const getInvoicesGET = Constants =>
  fetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/invoices`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetInvoicesGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['get all invoices', args],
    () => getInvoicesGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetInvoicesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetInvoicesGET(
    {},
    { refetchInterval }
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

  return children({ loading, data, error, refetchGetInvoices: refetch });
};

export const userLoginPOST = (Constants, { txtemail, txtpassword }) =>
  fetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/auth/nuvonilogin`, {
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

export const useUserLoginPOST = ({ txtemail, txtpassword }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/auth/nuvonilogin`,
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

export const FetchUserLoginPOST = ({
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
    `https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/auth/nuvonilogin`,
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

  return children({ loading, data, error, refetchUserLogin: refetch });
};

export const userRegisterPOST = (Constants, { txtEmail, txtconfirmPassword }) =>
  fetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/auth/signup`, {
    body: JSON.stringify({ email: txtEmail, password: txtconfirmPassword }),
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

export const useUserRegisterPOST = ({ txtEmail, txtconfirmPassword }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/auth/signup`,
    {
      body: JSON.stringify({ email: txtEmail, password: txtconfirmPassword }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchUserRegisterPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  txtEmail,
  txtconfirmPassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://xgsf-8vnj-sqew.f2.xano.io/api:0Tvpg4ad/auth/signup`, {
    body: JSON.stringify({ email: txtEmail, password: txtconfirmPassword }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });

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

  return children({ loading, data, error, refetchUserRegister: refetch });
};
