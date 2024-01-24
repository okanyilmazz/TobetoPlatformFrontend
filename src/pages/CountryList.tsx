import { useState, useEffect } from "react";
import CountryService from "../services/countryService";
import { Paginate } from "../models/paginate";
import { Table } from "semantic-ui-react";
import { GetListCountryResponse } from "../models/responses/country/getListCountryResponse";

export default function CountryList() {

    const [countries, setCountries] = useState<Paginate<GetListCountryResponse>>();

    useEffect(() => {
        let countryService = new CountryService()
        countryService.getAll().then(result => {
            setCountries(result.data)
        })
    }, []);

    return (
        <div>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ülke Adı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        countries?.items.map((country) => (
                            <Table.Row>{country.name}</Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>

    )
}
