import { Field, useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function TobetoSelect({ ...props }: any) {
    const [field, meta] = useField(props)
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <Field {...field} {...props} />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </FormField>
        </div>
    )
}