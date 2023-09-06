import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'
function AboutIconLink() {
    return (
        // Link is imported from react-router-dom
        // The to prop is used to specify the path to the page that we want to navigate to. In this case, we want to navigate to the AboutPage component.
        // The pathname property is used to specify the path to the page that we want to navigate to. In this case, we want to navigate to the AboutPage component. It could also be written <Link to="/about"><FaQuestion size={30} /></Link>.
        <div className="about-link">
            <Link to={{ pathname: '/about' }}><FaQuestion size={30} /></Link>
        </div>
    )
}
export default AboutIconLink