import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'

export default function TobetoTextInput({ ...props }: any) {
    const [field, meta] = useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}> {/*touched true-false. -- meta touched ise ve hata varsa */}
            <input {...field}{...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}

        </FormField>
    )
}
