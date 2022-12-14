import React, { Component, useRef, useState, useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';


// import SignatureCanvas from 'react-signature-canvas';

export const GetMySingturePad = () => {
  // const sigRef = useRef();

  // const [signature, setSignature] = useState(null);

  // const handleSignatureEnd = () => {
  //   setSignature(sigRef.current.toDataURL());
  // };

  // const clearSignature = () => {
  //   sigRef.current.clear();
  //   setSignature(null);
  // };

  // useEffect(() => {
  //   console.log(signature);
  // }, [signature]);

  return (
    <View>
      {/* <SignatureCanvas
        penColor="green"
        ref={sigRef}
        onEnd={handleSignatureEnd}
      /> */}
      {/* <Button title={'Register now'} disabled={false} /> */}
    </View>
  );
};

const style = StyleSheet.create({
  errorMsg: {
    position: 'absolute',
    left: 1,
  },
  emailError: {
    color: 'red',
  },
  container: {
    width: '100%',
    height: '100vh',
    top: '10%',
    left: '10%',
  },
  sigContainer: {
    width: '80%',
    height: '80%',
    margin: '0',
    backgroundColor: '#fff',
  },
  sigPad: {
    width: '100%',
    height: '100%',
  },
  buttons: {
    width: '100%',
    height: '30px',
  },
  sigImage: {
    width: '200px',
    height: '50px',
    backgroundColor: 'white',
  },
});
