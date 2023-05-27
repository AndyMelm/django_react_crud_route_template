
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <div>
            <div className="btn btn-info" role="alert">
                <Link to="/products">my Products—check it out!</Link> |    <Link to="/wishes">my Wishes—check it out!</Link>
            </div>
           

        </div>
    )
}

export default MyNavbar
