import { useState, useEffect } from "react";
import CountryService from "../services/countryService";
import { Table } from "semantic-ui-react";
import { Country } from "../models/country";
import { Paginate } from "../models/paginate";

export default function CountryList() {

    const [countries, setCountries] = useState<Paginate<Country>>();

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
