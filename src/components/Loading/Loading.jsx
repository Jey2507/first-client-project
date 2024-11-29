import { PropagateLoader } from "react-spinners";
import css from "../Loading/Loading.module.css"

export default function Loading() {
    return (
        <div className={css.boxLoading}>
            <PropagateLoader
            color="white" />
        </div>
    )
}