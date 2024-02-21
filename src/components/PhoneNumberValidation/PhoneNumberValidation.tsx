import React, { useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import "./PhoneNumberValidation.css"
import PhoneInput from 'react-phone-input-2';

export default function PhoneNumberValidation(props: any) {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [valid, setValid] = useState<boolean>(true);

    useEffect(() => {
        setPhoneNumber(props.phoneNumber);
    }, [props.phoneNumber])


    const handleChange = (value: string) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };


    const validatePhoneNumber = (phoneNumber: string): boolean => {
        const phoneNumberPattern: RegExp = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div>
            <label>
                <PhoneInput
                    country={'in'}
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                        required: true,
                    }}
                />
            </label>
            {!valid && (
                <p className='phone-not-valid'   >Please enter a valid phone number.</p>
            )}
        </div>
    );
};
