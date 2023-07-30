import Reviews from "../../Reviews/Reviews";
import GraduationGallery from "../GraduationGallery/GraduationGallery";
import PopularColleges from "../PopularColleges/PopularColleges";
import ResearchWorks from "../ResearchWorks/ResearchWorks";
import setTitle from "../../../hook/setTitle"

const Home = () => {
    setTitle("Home");
    return (
        <div>
            <PopularColleges></PopularColleges>
            <GraduationGallery></GraduationGallery>
            <ResearchWorks></ResearchWorks>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;