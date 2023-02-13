import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import style from '.././../HW11.module.css'

const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider valueLabelDisplay="auto" className={style.slider}
                sx={{ // стили для слайдера // пишет студент
                    width: 147,
                    height: 4,
                    color: "#01CB22",
                }}
                {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
