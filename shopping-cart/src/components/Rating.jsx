/* eslint-disable react/prop-types */
import { faker } from '@faker-js/faker'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const Rating = ({rating, onClickFn, style}) => {
  return (
    <>
       {
        [...Array(5)].map((_, i) => (
          <span key={faker.string.uuid()} onClick={() => onClickFn(i)} style={style}>
            {rating > i ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        ))
       }
    </>
  )
}

export default Rating