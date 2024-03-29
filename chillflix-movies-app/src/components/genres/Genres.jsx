/* eslint-disable react/prop-types */
import "./styles.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
    const {genres} = useSelector((state) => state.home);
    // console.log(genres);
    return <div className="genres">
        {data?.map((g) => {
            if(!genres[g]?.name) return;
            return (
                <div key={g} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>;
};

export default Genres;
