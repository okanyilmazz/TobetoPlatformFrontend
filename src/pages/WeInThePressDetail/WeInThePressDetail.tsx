import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paginate } from "../../models/paginate";
import GetListMediaNewResponse from "../../models/responses/mediaNew/getListMediaNewResponse";
import mediaNewService from "../../services/mediaNewService";

export default function WeInThePressDetail() {
    let { id } = useParams();

    const [weInThePresses, setWeInThePresses] = useState<Paginate<GetListMediaNewResponse>>();

    useEffect(() => {
        mediaNewService.getAll().then(result => {
            setWeInThePresses(result.data);
        })
    }, []);

    return (
        <div style={{ color: "blue", marginTop: "25rem" }}>
            basında biz detay sayfası
        </div>
    )
}