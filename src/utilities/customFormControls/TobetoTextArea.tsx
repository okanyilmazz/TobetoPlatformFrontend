import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function TobetoTextArea({ ...props }: any) {
    const [field, meta] = useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <textarea {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    );
}
