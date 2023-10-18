import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";


const Description = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const description = useLoaderData()
    useEffect(() => {
        const show = description.find(des => des.id == id);
        setData(show)
    }, [description, id])
    return (
        <div className="pt-16">
            <Details data={data}></Details>
        </div>
    );
};

export default Description;