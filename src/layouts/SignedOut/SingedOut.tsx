import { Button } from "semantic-ui-react"
import "./SignedOut.css"

export default function SignedOut() {
    return (
        <div className='sign'>
            <Button primary id="buttonStyle">Giriş Yap</Button>
            <Button className='register btn-rainbow'>Ücretsiz Üye Ol</Button>
        </div>
    )
}
