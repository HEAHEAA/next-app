"use client";
import {useRouter} from "next/navigation";

export default function ButtonOn(props){
    const router = useRouter();
    return(
        <button type="button" onClick={()=>router.push(props.to)}>
            go
        </button>
    )
}
