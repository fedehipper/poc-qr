import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function ScanOverlay() {
    return (

        <svg viewBox='0 0 100 100'
            style={{
                padding: 0,
                top: 0,
                left: 0,
                zIndex: 1,
                boxSizing: 'border-box',
                border: '85px rgba(111,111,111,0.2) solid',
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center'
            }}
        >
            <path fill='none' d='M13,0 L0,0 L0,13' stroke='#5bc500' strokeWidth='3'></path>
            <path fill='none' d='M0,87 L0,100 L13,100' stroke='#5bc500' strokeWidth='3'></path>
            <path fill='none' d='M87,100 L100,100 L100,87' stroke='#5bc500' strokeWidth='3'></path>
            <path fill='none' d='M100,13 L100,0 87,0' stroke='#5bc500' strokeWidth='3'></path>
        </svg >

    )
}

const QrComponent = () => {
    const [data, setData] = useState('');

    return (
        <div >
            {/* @ts-ignore */}
            <QrReader
                ViewFinder={() => <ScanOverlay />}
                containerStyle={{ justifyContent: 'center' }}
                onResult={(result, error) => {
                    if (!!result) {
                        // @ts-ignore
                        setData(result?.text);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                videoStyle={{ width: 'auto', height: 'auto' }}
                constraints={{

                    facingMode: { exact: 'environment' }
                }}
            />
        </div>
    );
};

export default QrComponent;