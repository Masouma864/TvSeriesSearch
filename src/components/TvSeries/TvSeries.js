import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDetail } from '../../redux/TvSeries/tvSeriesSlice';

const TvSeries = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchDetail(data.id));
  });

  return (
    <div className="tv-series-container">
      <div className="info">
        <img src={detail.image} alt={detail.name} />

      </div>
      <div className="more-info">
        <div className="detail-col">
          <p className="detail-name">
            {detail.name}
          </p>
          <p className="desc">
            {detail.summery}
          </p>
          <p className="genres">
            {detail.genres}
          </p>

        </div>

      </div>
    </div>
  );
};

export default TvSeries;
