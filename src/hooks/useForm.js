import React, { useEffect, useState } from 'react'


export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);

    // {
    //     username: 'carles',
    //     email: 'carlescatalancalabuig@gmail.com',
    //     password: ''
    // }

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormState ({
            ...formState,
            [name]: value
        })
    };

    const onResetForm = () => {
        setFormState(initialForm)
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}
