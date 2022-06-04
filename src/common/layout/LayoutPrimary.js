// styles
import Navigation from "../../components/Header/Navigation"
import style from "./style.module.scss"
const LayoutPrimary = (props) => {
    return (
        <div className={style.layout}>
            <Navigation />
            {props.children}
        </div>
    )
}

export default LayoutPrimary