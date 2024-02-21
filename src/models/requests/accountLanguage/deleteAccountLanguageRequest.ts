import { Identifier } from 'typescript';
export default interface DeleteAccountLanguageRequest {
    id: Identifier;
    accountId: Identifier;
    languageId: Identifier;
    languageLevelId: Identifier;
}

