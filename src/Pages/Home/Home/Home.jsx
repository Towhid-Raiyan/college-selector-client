import Reviews from "../../Reviews/Reviews";
import GraduationGallery from "../GraduationGallery/GraduationGallery";
import PopularColleges from "../PopularColleges/PopularColleges";
import ResearchWorks from "../ResearchWorks/ResearchWorks";

const Home = () => {
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